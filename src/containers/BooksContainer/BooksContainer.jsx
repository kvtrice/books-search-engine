import { useContext, useState } from "react";
import styles from "./BooksContainer.module.scss";
import { BookSearchContext } from "../../contexts/BookSearchContextProvider";
import BookCard from "../../components/BookCard/BookCard";
import { FetchStatusContext } from "../../contexts/FetchStatusContextProvider";
import Modal from "../../components/Modal/Modal";
import BookDetails from "../../components/BookDetails/BookDetails";

const BooksContainer = () => {
	const { books } = useContext(BookSearchContext);
	const { fetchStatus } = useContext(FetchStatusContext);
	const [isShowModal, setIsShowModal] = useState(false);
	const [currentBook, setCurrentBook] = useState(null);

	return (
		<>
			<div className={styles.container}>
				{fetchStatus === "ERROR" && (
					<p>No books found, please try another search term</p>
				)}
				{fetchStatus === "LOADING" && <p>...loading</p>}
				{fetchStatus === "SUCCESS" &&
					books?.map(book => (
						<BookCard
							key={book.id}
							book={book}
							setCurrentBook={setCurrentBook}
							setIsShowModal={setIsShowModal}
						/>
					))}
				{isShowModal && (
					<Modal setIsShowModal={setIsShowModal}>
						<BookDetails book={currentBook} />
					</Modal>
				)}
			</div>
		</>
	);
};

export default BooksContainer;
