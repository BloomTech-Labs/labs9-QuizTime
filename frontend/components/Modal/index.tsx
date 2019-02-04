import React, { Component } from "react";
import styled from "@emotion/styled";
//import './modal.css';

const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
`;

const ModalBox = styled.div`
    position: absolute;
    background: white;
    padding: 50px 10%;
`;

class Modal extends Component {

    render() {

        return (
            <ModalContainer>
                <ModalBox>
                    <div>{this.props.children}</div>
                </ModalBox>
            </ModalContainer>
        );
    }
}

export default Modal;
