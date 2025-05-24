import { useParams } from 'react-router-dom';
import ComicCard from '../ComicCard/ComicCard';
import { GetComic } from '../GetComic';
import { GetComicsSeries } from '../GetComicSeries';
import styles from './ComicPage.module.css';

export function ComicPage() {
    const { id } = useParams<{ id: string }>();
    const { comic, loading, error } = GetComic(Number(id));
    const comicsSeries = GetComicsSeries(comic?.seriesId || 0)

    if (loading) return <div>Loading comic...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!comic) return <div>Comic not found</div>;

    return (
        <div className={styles.page}>
            <img src={`${comic.logo}`} alt={comic.title} className={styles.logo} />
            <div className={styles.content}>
                <h1 className={styles.title}>{comic.title}</h1>
                <p>{comic.description}</p>
                <h2>Other comics of this series:</h2>
                <div className={styles.grid}>
                    {comicsSeries.comicsSeries.map(comic => <ComicCard key={comic.id} comic={comic} />)}
                </div>
            </div>
        </div>
    );
}
