import React from "react";
import Router from "next/router";
import { GraphQLClient } from "graphql-request";
import Cookie from "js-cookie";

import { setToken, getIdToken } from "../../utils/auth";
import { parseHash } from "../../utils/auth0";

const endpoint = `https://quiztime-hasura.herokuapp.com/v1alpha1/graphql`;

const queryTeacherCheck = `
  query {
    teacher {
      id
    }
  }
`;
const mutationTeacherAdd = `
  mutation insert_teacher{
    insert_teacher(
      objects: [
        {

        }
      ]
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export default class SignedIn extends React.Component {
  componentDidMount() {
    parseHash((err, result) => {
      if (err) {
        //look into redirecting them to an error page
        return;
      }

      setToken(result.idToken, result.accessToken);
      const client = new GraphQLClient(endpoint, {
        headers: {
          Authorization: `Bearer ${result.idToken}`
        }
      });

      client.request(queryTeacherCheck).then(({ teacher }) => {
        if (teacher.length > 0) {
          Router.push("/classes");
        } else {
          client.request(mutationTeacherAdd).then(({ id, affected_rows }) => {
            console.log(id);
            console.log(affected_rows);
            Router.push("/classes");
          });
        }
      });
    });
  }
  render() {
    return null;
  }
}
