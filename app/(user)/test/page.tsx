'use client'
import Dropdown from '@/components/dropdown/dropdown'
import { useGetImagesQuery } from '@/redux/service/images'
import React, { useEffect, useState } from 'react'
import { ImageType } from '@/lib/constans'
import Products from '@/components/product/products'
export default function Page() {
	const {data,isLoading,isFetching}=useGetImagesQuery({page:1,pageSize:10})
	console.log(data)
	const[images,setImages]=useState([])
	useEffect(()=>{
		if(!isLoading && data){
			setImages(data.results)
		}
	},[data,isLoading])
	console.log(images)
  return (
	<main>
	  <Products/>
	</main>
  )
}
