import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.themealdb.com/api/json/v1/1/',
    }),
    endpoints: (builder: any) => ({
        searchMealByName: builder.query({
            query: (name: string) => 'search.php?s=' + name,
        }),
        listAllMealCategories: builder.query({
            query: () => 'categories.php',
        }),
        filterByCategory: builder.query({
            query: (category: string) => 'filter.php?c=' + category,
        }),
    })
});

export const {useSearchMealByNameQuery, useListAllMealCategoriesQuery, useFilterByCategoryQuery} = apiSlice;
