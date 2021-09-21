import { useState } from 'react'

export const useModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleOpenModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  return {
    handleOpenModal,
    modalIsOpen,
  }
}
