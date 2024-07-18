import { useState } from "react";
import styles from "./BookCard.module.scss";

const Book = ({ book, setCurrentBook, setIsShowModal }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleModal = () => {
		setCurrentBook(book);
		setIsShowModal(true);
	};

	const toggleSeeMore = () => {
		setIsExpanded(!isExpanded);
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
				{isExpanded ? (
					<p className={styles.description}>
						{book.shortDescription}
						{book.shortDescription.length > 75 && (
							<button
								className={styles.expandButton}
								onClick={toggleSeeMore}
							>
								Hide
							</button>
						)}
					</p>
				) : (
					<p className={styles.description}>
						{book.shortDescription.length > 50
							? `${book.shortDescription.slice(0, 50)}...`
							: book.shortDescription}
						{book.shortDescription.length > 50 && (
							<button
								className={styles.expandButton}
								onClick={toggleSeeMore}
							>
								See more
							</button>
						)}
					</p>
				)}
			</div>
		</div>
	);
};
export default Book;
