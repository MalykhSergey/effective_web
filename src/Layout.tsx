import { Outlet } from "react-router-dom";
import styles from './Layout.module.css';
import { Footer } from "./presentation/Footer/Footer";
import Header from "./presentation/Header/Header";
export default function Layout() {
    return (
        <>
            <Header />
            <div className={styles.content}>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
