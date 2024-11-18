import { useEffect, useState } from "react";
import { useGlobalStore } from "../context/GlobalStoreProvider"
import { apiSearchMealByName } from "../functions/api/apiQueries";
import { useQSearch } from "../functions/customHooks/useQSearch";
import { Recipe } from "../types/appTypes";

export const SearchBar = () => {
    const [q, setQ] = useState<string>('');
    const handleChange = (e: any) => setQ(e.target.value);

    const {data: recipes} = useQSearch<Recipe>(
        apiSearchMealByName,
        q
    );

    // update global store
    const {setRecipesList} = useGlobalStore();
    useEffect(() => {
        setRecipesList(recipes);
    }, [recipes]);

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
