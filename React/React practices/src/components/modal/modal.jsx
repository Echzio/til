import React, { useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { hot } from 'react-hot-loader'




export const Modal = hot(module)(({ visibleModal, setVisibleModal, children }) => {
  const [rootId, setRootId] = useState(null);

  useMemo(() => {
    const rootParent = document.createElement('div');
    const id = Math.random().toFixed(2);
    setRootId(id);
    rootParent.id = id;
    document.body.appendChild(rootParent);
  }, [])

  return (
    visibleModal && createPortal(<ModalContent setVisibleModal={setVisibleModal} content={children} />, document.getElementById(`${rootId}`))
  )
})

function ModalContent({ setVisibleModal, content }) {
  return (
    <div style={{ border: '1px solid black', width: 'max-content', display: 'flex', 'alignItems': 'center', justifyContent: 'center' }}>
      <div>
        <button onClick={() => setVisibleModal(false)}>close?</button>
        {content}
      </div>
    </div>

  )
}