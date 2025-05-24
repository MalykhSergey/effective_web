import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Pagination.module.css';
import { useMemo } from 'react';

export default function Pagination(props: { totalPages: number }) {
    const totalPages = props.totalPages;
    const navigate = useNavigate();
    const { pathname, search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const currentPage = useMemo(() => {
        const pageParam = parseInt(searchParams.get('page') || '1');
        return isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;
    }, [searchParams]);

    const goToPage = (page: number) => {
        searchParams.set('page', page.toString());
        navigate(`${pathname}?${searchParams.toString()}`);
    };

    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        if (currentPage <= 4) {
            for (let i = 1; i <= 4; i++) pages.push(i);
            pages.push('...');
            pages.push(totalPages);
        } else if (currentPage >= totalPages - 3) {
            pages.push(1);
            pages.push('...');
            for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);
            pages.push('...');
            pages.push(currentPage - 1, currentPage, currentPage + 1);
            pages.push('...');
            pages.push(totalPages);
        }
    }

    return (
        <ul className={styles.pagination}>
            {pages.map((page, idx) => (
                <li
                    key={`${page}-${idx}`}
                    className={
                        typeof page === 'number'
                            ? `${styles.pageItem} ${page === currentPage ? styles.active : ''}`
                            : `${styles.pageItem} ${styles.disabled}`
                    }
                    onClick={() => typeof page === 'number' && page !== currentPage && goToPage(page)}
                >
                    {page}
                </li>
            ))}
        </ul>
    );
};