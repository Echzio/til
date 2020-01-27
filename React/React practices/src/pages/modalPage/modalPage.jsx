import React, { useState } from 'react'
import { hot } from 'react-hot-loader';
import { Modal } from '@/components/modal/modal'

export const ModalPage = hot(module)(() => {
  const [visibleModal1, setVisibleModal1] = useState(false)
  const [visibleModal2, setVisibleModal2] = useState(false)
  return (
    <>
      <button onClick={() => setVisibleModal1(prevState => !prevState)}>toggle modal 1</button>
      <button onClick={() => setVisibleModal2(prevState => !prevState)}>toggle modal 2</button>
      <Modal visibleModal={visibleModal1} setVisibleModal={setVisibleModal1}>
      <h2>first modal</h2>
      <p>description for first modal....</p>
      </Modal>
      <Modal visibleModal={visibleModal2} setVisibleModal={setVisibleModal2}>
      <h2>second modal</h2>
      <p>description for second modal....</p>
      </Modal>
    </>
  )
})