import styles from "./BookDetails.module.scss";

const BookDetails = ({ book }) => {
	return (
		<div>
			<p>{book.title}</p>
			<p>{book.longDescription}</p>
			<img
				src={book.image}
				alt={book.title}
			/>
		</div>
	);
};
export default BookDetails;
