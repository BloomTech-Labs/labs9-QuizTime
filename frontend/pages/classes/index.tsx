import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "@emotion/styled";
import Link from "next/link";
import { Box, Flex } from "@rebass/emotion";
import ClassBox from "../../components/boxes/classBox/classBox";
import Layout from "../../components/Layout";
import securePage from "../../hocs/securePage";
import AddClass from "../../components/forms/AddClass";
import { ALL_CLASSES_QUERY } from "../../queries";
import { Container, Label, Button, UpperCase } from "../../components/design-system";
import AddBox from '../../components/boxes/addBox/addBox';
import Modal from '../../components/Modal/index';
import ReactLoading from "react-loading";
import { css } from "@emotion/core";

const CardHolder = styled.div`
  display: flex;
  flexwrap: wrap;
  justify-content: flex-start;
  margin-top: 15px;
`;

const Holder = styled.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const ATag = styled.a`
  text-decoration: none;
`;

class Classes extends Component {
  state = {
    isHidden: true
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <>
        <Layout>
          <Box my={3} mx={5} py={3}>
            <Label m={3} >Your Classes</Label>
            <CardHolder>
              <Holder>
                <Box onClick={this.toggleHidden.bind(this)}>
                  <ATag>
                    <AddBox />
                  </ATag>
                </Box>
                {!this.state.isHidden &&
                  <Modal>
                    <Box p={2}>
                      <Flex
                        flexDirection="row"
                      >
                        <AddClass />
                        <Box>
                          <UpperCase
                            color="blue.1"
                            fontWeight={6}
                            fontSize={2}
                            css={{ cursor: "pointer" }}
                            onClick={this.toggleHidden.bind(this)}
                          >x
                          </UpperCase>
                        </Box>
                      </Flex>
                    </Box>
                  </Modal>}
                <Query query={ALL_CLASSES_QUERY}>
                  {({ loading, error, data }) => {
                    if (error) return <p>{error.message}</p>;
                    if (loading) {
                      return (
                        <Flex justifyContent='center' alignItems='center' p={2} m={5}>
                        <ReactLoading
                          type="spin"
                          color="lightgray"
                          height="100px"
                          width="100px"
                        />
                        </Flex>
                      );
                    }
                    if (data) {
                      return data.class.map(c => (
                        <ClassBox key={c.id} className={c} />
                      ));
                    }
                  }}
                </Query>
              </Holder>
            </CardHolder>
          </Box>
        </Layout>
      </>
    )
  }
};

export default securePage(Classes);
