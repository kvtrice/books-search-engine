import { useState } from "react";
import styles from "./BookCard.module.scss";

const Book = ({ book, setCurrentBook, setIsShowModal }) => {
	const handleModal = () => {
		setCurrentBook(book);
		setIsShowModal(true);
	};

	return (
		<div className={styles.bookContainer}>
			<div
				className={styles.imgContainer}
				onClick={handleModal}
			>
				<img
					className={styles.img}
					src={book.image}
					alt=""
				/>
			</div>
			<div className={styles.contentContainer}>
				<p className={styles.title}>{book.title}</p>
				<p className={styles.authors}>
					{typeof book.authors === "string"
						? book.authors
						: book.authors.join(", ")}
				</p>
				<p className={styles.description}>
					{book.shortDescription.slice(0, 50) + "..."}
				</p>
				<button
					onClick={handleModal}
					className={styles.btn}
				>
					See more
				</button>
			</div>
		</div>
	);
};
export default Book;
