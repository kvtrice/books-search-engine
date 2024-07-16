import { createContext, useState } from "react";

export const ErrorContext = createContext(null);

const ErrorContextProvider = ({ children }) => {
	const [error, setError] = useState("");

	return (
		<ErrorContext.Provider value={{ error, setError }}>
			{children}
		</ErrorContext.Provider>
	);
};

export default ErrorContextProvider;
