export const fetchGet = async <T>(
    endpoint: string,
    abortController?: AbortController
): Promise<T> => {
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
        signal: abortController?.signal
    });

    const data = response.json();

    if(response.ok) {
        return data;
    }
    throw new Error('Fetch error');
}
