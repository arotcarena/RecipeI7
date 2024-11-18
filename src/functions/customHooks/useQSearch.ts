import { useEffect, useRef, useState } from "react";

export const useQSearch = <T>(
    searchFn: (q: string) => Promise<T[]>,
    q: string,
    initialLoad: boolean = true,
) => {
    const abortControllerRef = useRef<AbortController|null>(null);

    const [data, setData] = useState<T[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string|null>(null);

    useEffect(() => {
        if(initialLoad) {
            doFetch();
        }
    }, []);

    useEffect(() => {
        doFetch();
    }, [q, searchFn]);
    
    const doFetch = async () => {
        if(abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        const controller = new AbortController();
        abortControllerRef.current = controller;

        setLoading(true);
        try {
            const fetchedData = await searchFn(q);
            setData(fetchedData);
        } catch(e: any) {
            setError('An error occured when fetching data');
        }
    };

    return {
        data,
        isLoading,
        error,
        reset: () => setData([]),
    };
}
