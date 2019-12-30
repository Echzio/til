import React, { useRef, useEffect, useState } from 'react';
import { hot } from 'react-hot-loader'
import { createPortal } from 'react-dom'


const ModalView = ({ changeShow }) => {
  return (
    <div>
      <p>привет я модалка</p>
      <button onClick={() => changeShow(prevState => !prevState)}>закрыть себя?</button>
    </div>
  )
}

const Modal = hot(module)(({ show, changeShow }) => {
  const modal = useRef(<ModalView changeShow={changeShow} />);


  return (
    <>
      {show && createPortal(modal.current, document.body)}
    </>

  )
});



export { Modal }