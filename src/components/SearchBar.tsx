import { useGlobalStore } from "../context/GlobalStoreProvider"

export const SearchBar = () => {
    const {q, setQ} = useGlobalStore();
    const handleChange = (e: any) => setQ(e.target.value);

    return (
        <div className="px-4 py-4 flex flex-row">
            <input
                style={{width: '100%', display: 'block', height: '40px', borderRadius: '20px', padding: '0 15px'}}
                value={q}
                onChange={handleChange}
                placeholder="Rechercher..."
            />
        </div>
    )
}
