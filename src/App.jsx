import { useEffect } from "react";
import Header from "./components/Header/Header";
import { fetchBooks } from "./services/books-service";
import BookSearch from "./components/BookSearch/BookSearch";
import BooksContainer from "./containers/BooksContainer/BooksContainer";
import BookSearchContextProvider from "./contexts/BookSearchContextProvider";

function App() {
	// useEffect(() => {
	// 	fetchBooks("gone girl", 5).then(data => console.log(data));
	// }, []);

	return (
		<>
			<Header />
			<BookSearchContextProvider>
				<BookSearch />
				<BooksContainer />
			</BookSearchContextProvider>
		</>
	);
}

export default App;
