import { useEffect, useState } from "react";
import type IComic from "../../domain/Comic/Comic";
import { useCases } from "./UseCaseContext";

export function GetComicsSeries(series: number) {
    const { getComicsSeries } = useCases();
    const [comicsSeries, setComicsList] = useState<IComic[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getComicsSeries
            .execute(series)
            .then(setComicsList)
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }, [series]);

    return { comicsSeries, loading, error };

}