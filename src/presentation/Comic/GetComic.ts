import { useEffect, useState } from "react";
import type IComic from "../../domain/Comic/Comic";
import { useCases } from "./UseCaseContext";

export function GetComic(id: number) {
    const { getComic } = useCases();
    const [comic, setComic] = useState<IComic | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            try {
                const data = await getComic.execute(id);
                setComic(data);
            } catch (e: any) {
                setError(e.message ?? 'Unknown error');
            } finally {
                setLoading(false);
            }
        }
        load();
    }, [getComic, id]);

    return { comic, loading, error };
}