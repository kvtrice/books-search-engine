import Header from "./components/Header/Header";
import BooksContainer from "./containers/BooksContainer/BooksContainer";
import BookSearchContextProvider from "./contexts/BookSearchContextProvider";
import FetchStatusContextProvider from "./contexts/FetchStatusContextProvider";
import ErrorContextProvider from "./contexts/ErrorContextProvider";

function App() {
	return (
		<>
			<FetchStatusContextProvider>
				<BookSearchContextProvider>
					<ErrorContextProvider>
						<Header />
						<BooksContainer />
					</ErrorContextProvider>
				</BookSearchContextProvider>
			</FetchStatusContextProvider>
		</>
	);
}

export default App;
