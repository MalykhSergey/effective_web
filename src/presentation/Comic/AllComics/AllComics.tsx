import { useLocation } from "react-router-dom";
import Pagination from "../../Pagination/Pagination";
import ComicCard from "../ComicCard/ComicCard";
import { GetComicsList } from "../GetComicList";
import styles from './AllComics.module.css';

export function AllComics() {
    const { search } = useLocation();
    const pageParam = parseInt(new URLSearchParams(search).get('page') || '1');
    const currentPage = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;


    const { comicsList, loading, error } = GetComicsList(currentPage);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.page}>
            <div>
                <h1>Comics</h1>
                <hr />
            </div>

            <div className={styles.content}>
                {comicsList.length === 0 ? (
                    <div>No comics</div>
                ) : (
                    <div className={styles.grid}>
                        {comicsList.map(comic => <ComicCard key={comic.id} comic={comic} />)}
                    </div>
                )}
            </div>

            <Pagination totalPages={3910} />
        </div>
    );
}
