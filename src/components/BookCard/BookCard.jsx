import styles from "./BookCard.module.scss";

const Book = ({ book }) => {
	return <div>
		<p>Title: {book.title}</p>
		<p>Authors: {book.authors.length > 1 ? book.authors.join(", ") : book.authors}</p>
		<img src={book.image} alt="" />
	</div>;
};
export default Book;
