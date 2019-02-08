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
    padding: 15px 2%;
    border: 1px solid #323fcb;
    border-radius: 6px;
    border-bottom: 5px solid #323fcb;
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
