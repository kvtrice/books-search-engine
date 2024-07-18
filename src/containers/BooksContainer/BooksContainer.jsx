import { useContext, useState } from "react";
import styles from "./BooksContainer.module.scss";
import { BookSearchContext } from "../../contexts/BookSearchContextProvider";
import BookCard from "../../components/BookCard/BookCard";
import { FetchStatusContext } from "../../contexts/FetchStatusContextProvider";
import Modal from "../../components/Modal/Modal";
import BookDetails from "../../components/BookDetails/BookDetails";
import { ErrorContext } from "../../contexts/ErrorContextProvider";
import ThreeDots from "react-loading-icons/dist/esm/components/three-dots";

const BooksContainer = () => {
	const { books } = useContext(BookSearchContext);
	const { fetchStatus } = useContext(FetchStatusContext);
	const { error } = useContext(ErrorContext);
	const [isShowModal, setIsShowModal] = useState(false);
	const [currentBook, setCurrentBook] = useState(null);

	return (
		<>
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
