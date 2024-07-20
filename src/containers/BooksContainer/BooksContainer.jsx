import { useContext, useState } from "react";
import styles from "./BooksContainer.module.scss";
import { BookSearchContext } from "../../contexts/BookSearchContextProvider";
import BookCard from "../../components/BookCard/BookCard";
import Modal from "../../components/Modal/Modal";
import BookDetails from "../../components/BookDetails/BookDetails";
import ThreeDots from "react-loading-icons/dist/esm/components/three-dots";
import Pagination from "../../components/Pagination/Pagination";

const BooksContainer = () => {
	const { books, page, totalPages, fetchStatus, error } =
		useContext(BookSearchContext);
	const [isShowModal, setIsShowModal] = useState(false);
	const [currentBook, setCurrentBook] = useState(null);

	return (
		<>
			<Pagination
				currentPage={page}
				lastPage={totalPages}
			/>
			{fetchStatus === "ERROR" && <p className={styles.error}>{error}</p>}
			{books && fetchStatus === "LOADING" && (
				<ThreeDots
					fill="#006E61"
					className={styles.loading}
				/>
			)}
			{fetchStatus === "SUCCESS" && (
				<div className={styles.container}>
					{books?.map(book => (
						<BookCard
							key={book.id}
							book={book}
							setCurrentBook={setCurrentBook}
							setIsShowModal={setIsShowModal}
						/>
					))}
				</div>
			)}
			{isShowModal && (
				<Modal setIsShowModal={setIsShowModal}>
					<BookDetails book={currentBook} />
				</Modal>
			)}
		</>
	);
};

export default BooksContainer;
