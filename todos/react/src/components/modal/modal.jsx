import React, { useRef, useEffect, useState } from 'react';
import { hot } from 'react-hot-loader'
import { createPortal } from 'react-dom'

const modalContainer = document.createElement('div');


const ModalView = ({changeShow}) => {
  return (
    <>
    <p>привет я модалка</p>
    <button onClick={() => changeShow(prevState => !prevState)}>закрыть себя?</button>
    </>
  )
}

const Modal = hot(module)(({show, changeShow}) => {
  const modal = useRef(<ModalView changeShow={changeShow} />);

  useEffect(() => {
    document.body.append(modalContainer)

    return () => {
      document.body.remove(modalContainer)
    };
  }, [])

  return (
    <>
    {show && createPortal(modal.current, modalContainer)}
    </>
    
  )
});



export { Modal }