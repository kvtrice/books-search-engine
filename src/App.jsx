import Header from "./components/Header/Header";
import BookSearch from "./components/BookSearch/BookSearch";
import BooksContainer from "./containers/BooksContainer/BooksContainer";
import BookSearchContextProvider from "./contexts/BookSearchContextProvider";
import FetchStatusContextProvider from "./contexts/FetchStatusContextProvider";

function App() {
	return (
		<>
			<Header />
			<FetchStatusContextProvider>
				<BookSearchContextProvider>
					<BookSearch />
					<BooksContainer />
				</BookSearchContextProvider>
			</FetchStatusContextProvider>
		</>
	);
}

export default App;
