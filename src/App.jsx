import { useEffect } from "react";
import Header from "./components/Header/Header";
import { fetchBooks } from "./services/books-service";

function App() {
	useEffect(() => {
		fetchBooks("gone girl", 5).then(data => console.log(data));
	}, []);

	return (
		<>
			<Header />
		</>
	);
}

export default App;
