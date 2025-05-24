import { useEffect, useState } from "react";
import type IComic from "../../domain/Comic/Comic";
import { useCases } from "./UseCaseContext";

export function GetComicsList(page = 1) {
    const { getComicsList } = useCases();
    const [comicsList, setComicsList] = useState<IComic[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getComicsList
            .execute(page)
            .then(setComicsList)
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }, [page]);

    return { comicsList, loading, error };

}