import { ecommerceApi } from "../api";

export const productApi = ecommerceApi.injectEndpoints({
    endpoints: (builder) => ({
        
		// get all products
	                   
		getProducts: builder.query<any, { page: number; pageSize: number }>({
			query: ({ page = 1, pageSize = 10 }) =>({
				url: `api/products/my_products/?page=${page}&page_size=${pageSize}`,
			    method: "GET",
				
			})
			
		}),
		// get single product
		getProductById: builder.query<any, number>({
			query: (id) => `api/products/${id}/`,
		}),
		
        // update product
		updateProduct: builder.mutation<
			any,
			{ id: number; updatedProduct: object; }
		>({
			query: ({ id, updatedProduct }) => ({
				url: `/api/products/${id}/`,
				method: "PATCH",
				body: updatedProduct,
			}),
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
	useGetProductsQuery,
	useGetProductByIdQuery,
	useUpdateProductMutation,
	useGetImagesQuery
} = productApi;