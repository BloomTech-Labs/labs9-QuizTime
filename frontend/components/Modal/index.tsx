import React, { Component } from "react";
import styled from "@emotion/styled";
//import './modal.css';

class Modal extends Component {

    render() {

      return (
        <div>
          <div>{this.props.children}</div>
        </div>
      );
    }
  }

export default Modal;
