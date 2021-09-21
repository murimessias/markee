import ReactModal from 'react-modal'

// Styles
import * as S from './modal-styles'

// Modal Styles
const customStyles = {
  content: {
    borderRadius: '0.4rem',
    bottom: 'auto',
    left: '50%',
    marginRight: '-50%',
    maxWidth: '56rem',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '93.33%',
  },
}

ReactModal.setAppElement('[data-js="app"]')

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <S.ModalContent>
        <S.ModalTitle>Atalhos para Markdown</S.ModalTitle>

        <S.ModalTipContainer>
          <S.ModalTip>
            <h4>Headings</h4>
            <ul>
              <li># H1</li>
              <li>## H2</li>
              <li>### H3</li>
              <li>...</li>
            </ul>
          </S.ModalTip>
          <S.ModalTip>
            <h4>Negrito</h4>
            <ul>
              <li>**bold text**</li>
            </ul>
          </S.ModalTip>
          <S.ModalTip>
            <h4>Itálico</h4>
            <ul>
              <li>*italicized text*</li>
            </ul>
          </S.ModalTip>
          <S.ModalTip>
            <h4>Lista numerada</h4>
            <ul>
              <li>1. Item 1</li>
              <li>2. Item 2</li>
            </ul>
          </S.ModalTip>
          <S.ModalTip>
            <h4>Lista desordenada</h4>
            <ul>
              <li>- Item 1</li>
              <li>- Item 2</li>
            </ul>
          </S.ModalTip>
          <S.ModalTip>
            <h4>Código</h4>
            <ul>
              <li>`code`</li>
            </ul>
          </S.ModalTip>
          <S.ModalTip>
            <h4>Linha horizontal</h4>
            <ul>
              <li>---</li>
            </ul>
          </S.ModalTip>
          <S.ModalTip>
            <h4>Link</h4>
            <ul>
              <li>[título](https://www.exemple.com)</li>
            </ul>
          </S.ModalTip>
          <S.ModalTip>
            <h4>Image</h4>
            <ul>
              <li>![texto alternativo](imagem.png)</li>
            </ul>
          </S.ModalTip>
        </S.ModalTipContainer>
      </S.ModalContent>
    </ReactModal>
  )
}

export { Modal }
