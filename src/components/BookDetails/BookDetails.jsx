import styles from "./BookDetails.module.scss";

const BookDetails = ({ book }) => {
	return (
		<div className={styles.modalContent}>
			<div className={styles.imgContainer}>
				<img
					className={styles.img}
					src={book.image}
					alt=""
				/>
			</div>
			<p className={styles.title}>{book.title}</p>
			<p className={styles.authors}>
				{typeof book.authors === "string"
					? book.authors
					: book.authors.join(", ")}
			</p>
			<div className={styles.extraInfoContainer}>
				<p className={styles.extraInfoContainer__content}>
					{book.pageCount} pages
				</p>
				<p className={styles.extraInfoContainer__content}>|</p>
				<p className={styles.extraInfoContainer__content}>
					{book.genres}
				</p>
			</div>
			<p className={styles.description}>{book.shortDescription}</p>
			<p className={styles.publisher}>Published by {book.publisher}</p>
		</div>
	);
};
export default BookDetails;
