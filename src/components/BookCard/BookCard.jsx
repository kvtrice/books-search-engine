import styles from "./BookCard.module.scss";

const Book = ({ book, setCurrentBook, setIsShowModal }) => {
	const handleModal = () => {
		setCurrentBook(book);
		setIsShowModal(true);
	};

	return (
		<div
			className={styles.bookContainer}
			onClick={handleModal}
		>
			<p>Title: {book.title}</p>
			<p>
				Authors:{" "}
				{book.authors.length > 1
					? book.authors.join(", ")
					: book.authors}
			</p>
			<img
				src={book.image}
				alt=""
			/>
		</div>
	);
};
export default Book;
