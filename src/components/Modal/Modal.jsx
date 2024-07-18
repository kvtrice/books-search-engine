import styles from "./Modal.module.scss";

const Modal = ({ children, setIsShowModal }) => {
	const closeModal = () => {
		setIsShowModal(false);
	};

	return (
		<div className={styles.modal__container}>
			<div className={styles.modal}>
				<div className={styles.modal__header}>
					<p
						className={styles.modal__header__close}
						onClick={closeModal}
					>
						&times;
					</p>
				</div>
				<div className={styles.modal__content}>{children}</div>
				<div className={styles.modal__footer}>
					<button
						className={styles.modal__footer__btn}
						onClick={closeModal}
					>
						Back
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
