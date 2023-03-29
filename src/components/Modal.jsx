import React from 'react'
import {createPortal} from "react-dom";
import Echo from './Echo';
let portalEl = document.getElementById("portal")

const Modal = () => {

  return createPortal(<Echo />, portalEl)
}

export default Modal