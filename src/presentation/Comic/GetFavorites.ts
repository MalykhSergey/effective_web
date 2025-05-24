import { useEffect, useState } from "react";
import type IComic from "../../domain/Comic/Comic";
import { useCases } from "./UseCaseContext";

export function GetFavorites() {
    const { getFavorites } = useCases();
    const [comicsFavorites, setComicsList] = useState<IComic[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getFavorites
            .execute()
            .then(setComicsList)
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }, []);

    return { comicsFavorites, loading, error };

}