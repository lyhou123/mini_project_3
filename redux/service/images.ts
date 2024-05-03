import { ecommerceApi } from "../api";

export const imageApi = ecommerceApi.injectEndpoints({
    endpoints: (builder) => ({
        
		// get images of icon products
	                   
        getIcons: builder.query<any, { page: number; pageSize: number }>({
            query: ({ page = 1, pageSize = 10 }) =>({
                url: `api/file/icon/?page=${page}&page_size=${pageSize}`,
                method: "GET",
                
            })
            
        }),

		// getImages

		getImages: builder.query<any, { page: number; pageSize: number }>({
			query: ({ page = 1, pageSize = 10 }) => ({
				url: `api/file/product/?page=${page}&page_size=${pageSize}`,
				method: "GET",
			}),
		}),
	})
})

export const {
	useGetIconsQuery,
	useGetImagesQuery
} = imageApi;