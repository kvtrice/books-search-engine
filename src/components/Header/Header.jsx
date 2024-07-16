import BookSearch from "../BookSearch/BookSearch";
import styles from "./Header.module.scss";

const Header = () => {
	return (
		<div className={styles.headerContainer}>
			<header className={styles.header}>
				<h1 className={styles.header__heading}>Find your next book</h1>
			</header>
			<BookSearch />
		</div>
	);
};
export default Header;
