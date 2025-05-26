import ComicCard from "../ComicCard/ComicCard";
import { GetFavorites } from "../GetFavorites";
import styles from './Favorite.module.css';

export function Favorite() {
    const { comicsFavorites, loading, error } = GetFavorites();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.page}>
            <div>
                <h1>Favorite</h1>
                <hr />
            </div>

            <div className={styles.content}>
                {comicsFavorites.length === 0 ? (
                    <div>No comics</div>
                ) : (
                    <div className={styles.grid}>
                        {comicsFavorites.map(comic => <ComicCard key={comic.id} comic={comic} />)}
                    </div>
                )}
            </div>
        </div>
    );
}
