import Header from "./components/Header/Header";
import BooksContainer from "./containers/BooksContainer/BooksContainer";
import BookSearchContextProvider from "./contexts/BookSearchContextProvider";

function App() {
	return (
		<>
			<BookSearchContextProvider>
				<Header />
				<BooksContainer />
			</BookSearchContextProvider>
		</>
	);
}

export default App;
