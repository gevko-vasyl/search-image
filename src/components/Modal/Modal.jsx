import React, { Component } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

const modalRoot = document.getElementById("modalRoot");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseModal);
  }

  handleCloseModal = (e) => {
    if (e.code === "Escape") {
      this.props.toggleModal();
    }
    if (e.target.className === "Overlay") {
      this.props.toggleModal();
    }
    console.log(e.target.className);
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleCloseModal}>
        <div className="Modal">
          <img src={this.props.largeImage} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
