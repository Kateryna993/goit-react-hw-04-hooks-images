import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ bigImage, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={style.Overlay} onClick={handleBackdropClick}>
      <div className={style.Modal}>
        <img src={bigImage} alt="" />
      </div>
    </div>,
    modalRoot,
  );
}

// export default class Modal extends Component {
//   componentDidMount() {

//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {

//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {

//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = event => {

//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className={style.Overlay} onClick={this.handleBackdropClick}>
//         <div className={style.Modal}>
//           <img src={this.props.bigImage} alt="" />
//         </div>
//       </div>,
//       modalRoot,
//     );
//   }
// }
