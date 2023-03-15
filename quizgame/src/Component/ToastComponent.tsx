import React, { useState } from "react";
import { Toast } from "react-bootstrap";
export default function ToastComponent(props: any) {
  const [errormsg, seterrormsg] = useState("Invalid Credentials");

  return (
    <div>
      <Toast
        bg="danger"
        className="text-white"
        onClose={() => props.setToast(false)}
        autohide
        show={props.showToast}
        delay={2200}
      >
        <Toast.Header closeButton = {false}><strong className="text-uppercase"> {props.errappear}</strong></Toast.Header>
        <Toast.Body>
          <strong className="h6">{errormsg}</strong>{" "}
        </Toast.Body>
      </Toast>
    </div>
  );
}
