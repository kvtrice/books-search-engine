import styles from "./Header.module.scss";

const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.header__heading}>
				Looking for a book? Start here
			</h1>
		</header>
	);
};
export default Header;
