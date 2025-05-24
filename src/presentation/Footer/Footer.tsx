import styles from './Footer.module.css';
import marvelLogo from '../../assets/marvel.svg';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <img src={marvelLogo} alt="Marvel Logo" className={styles.footerLogo} />
      <div className={styles.footerText}>
        Data provided by Marvel. © {currentYear} MARVEL
      </div>
      <a
        href="https://developer.marvel.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerLink}
      >
        developer.marvel.com
      </a>
    </footer>
  );
}