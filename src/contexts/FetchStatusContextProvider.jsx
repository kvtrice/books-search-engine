import { createContext, useState } from "react";

export const FetchStatusContext = createContext();

const FetchStatusContextProvider = ({ children }) => {
	const [fetchStatus, setFetchStatus] = useState("");

	return (
		<FetchStatusContext.Provider value={{ fetchStatus, setFetchStatus }}>
			{children}
		</FetchStatusContext.Provider>
	);
};

export default FetchStatusContextProvider;
