import { createContext, useState } from "react";

export const BookSearchContext = createContext();

const BookSearchContextProvider = ({ children }) => {
	const [books, setBooks] = useState(null);

	return (
		<BookSearchContext.Provider value={{ books, setBooks }}>
			{children}
		</BookSearchContext.Provider>
	);
};

export default BookSearchContextProvider;
