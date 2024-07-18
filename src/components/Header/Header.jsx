import { useContext, useEffect, useState } from "react";
import BookSearch from "../BookSearch/BookSearch";
import styles from "./Header.module.scss";
import { BookSearchContext } from "../../contexts/BookSearchContextProvider";
import { FetchStatusContext } from "../../contexts/FetchStatusContextProvider";
import { ThreeDots } from "react-loading-icons";
import heroImage from "../../assets/woman-with-book.png";

const Header = () => {
	const { books } = useContext(BookSearchContext);
	const { fetchStatus } = useContext(FetchStatusContext);
	const [isFullPage, setIsFullPage] = useState(true);

	useEffect(() => {
		if (books) {
			setIsFullPage(false);
		} else {
			setIsFullPage(true);
		}
	}, [books]);

	return (
		<>
			<div className={isFullPage ? styles.wrapper__full : styles.wrapper}>
				<div
					className={
						isFullPage
							? styles.headerContainer__full
							: styles.headerContainer
					}
				>
					<header className={styles.header}>
						<h1 className={styles.header__heading}>
							Find your next book
						</h1>
					</header>
					<BookSearch />
					{!books &&
						(fetchStatus === "LOADING" ? (
							<ThreeDots className={styles.loading} />
						) : (
							<img
								className={styles.heroImage}
								src={heroImage}
								alt="Woman reading a book"
							/>
						))}
				</div>
			</div>
		</>
	);
};
export default Header;
