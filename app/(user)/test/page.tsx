'use client'
import Dropdown from '@/components/dropdown/dropdown'
import { useGetImagesQuery } from '@/redux/service/images'
import React, { useEffect, useState } from 'react'
import { ImageType } from '@/lib/constans'
import Products from '@/components/product/products'
import ProductView from '@/components/shoppingcart/shoppingCart'
export default function Page() {

  return (
	<main>
	  <ProductView/>
	</main>
  )
}
