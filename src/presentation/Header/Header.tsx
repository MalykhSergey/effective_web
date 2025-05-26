import { NavLink } from 'react-router-dom';
import marvelLogo from '../../assets/marvel.svg';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <NavLink to="/">
                <img src={marvelLogo} alt="Marvel Logo" className={styles.logo} />
            </NavLink>
            <nav className={styles.nav}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                >
                    Comics
                </NavLink>
                <NavLink
                    to="/favorite"
                    className={({ isActive }) =>
                        isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                >
                    Favorite
                </NavLink>
            </nav>
        </header>
    );
}