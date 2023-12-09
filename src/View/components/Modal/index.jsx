import React from "react";
import ImageSvg from "../ImageSVG";

import "./Modal.css";

const Modal = ({ children, close, modalTitle }) => {
  return (
    <div className="modal" onClick={() => close(false)}>
      <div className="modal_wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <p className="modalTitle">{modalTitle}</p>
          <button className="closeBtnX" onClick={() => close(false)}>
            <ImageSvg
              config={{
                icon: "Close",
                fill: "rgb(46, 46, 101)",
                stroke: "none",
                size: 20,
              }}
            />
          </button>
        </div>
        <div className="modal_children">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
