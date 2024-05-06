'use client'
import React, { useEffect, useState } from 'react'
import { ProductType } from '@/lib/constans'
import { useRouter } from 'next/navigation'
import CardComponent from './cardcomponent'
import { useGetAllProductsQuery } from '@/redux/service/product'
export default function Products() {
  const[products,setProduct]=useState<ProductType[]>([])
  const[currentPage,setCurrentPage] = useState(1)
  const router = useRouter()
  const[page, setPage] = useState(1);
  const[pageSize, setPageSize] = useState(8);

  const nextPage = () => {
    setPage(page + 1);
};

const prevPage = () => {
    if (page > 1) {
        setPage(page - 1);
    }
};

    const{data,isLoading,isError} = useGetAllProductsQuery({page:page,pageSize:pageSize})
    console.log('this is data',data)	
    
    useEffect(()=>{
      if(data && !isLoading){
        setProduct(data.results)
      }
    },[data,isLoading])


    const renderPageNumbers = (data:any) => {
      const pagesToShow = [];
      const totalPageCount = Math.ceil(data?.total / pageSize);
      const maxPageNumberToShow = 5; 
  
      let startPage = Math.max(1, page - Math.floor(maxPageNumberToShow / 2));
      let endPage = Math.min(totalPageCount, startPage + maxPageNumberToShow - 1);
  
      if (endPage - startPage < maxPageNumberToShow - 1) {
          startPage = Math.max(1, endPage - maxPageNumberToShow + 1);
      }
  
      for (let i = startPage; i <= endPage; i++) {
          pagesToShow.push(
              <button key={i} onClick={() => setPage(i)} className={`px-3 py-1 mx-1 rounded-lg ${i === page ? 'bg-yellow-500 text-white' : 'bg-gray-100'}`}>
                  {i}
              </button>
          );
      }
  
      return pagesToShow;
  };

  return (
    <main>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-[24px] container mx-auto' data-aos="fade-up"
                   data-aos-duration="1000">
                {products.map((pro, key) => (
                    <CardComponent
                    
                        quantity={pro.quantity}
                        key={key}
                        id={pro.id}
                        onClick={() => router.push(`/service/${pro.id}`)}
                        name={pro.name}
                        price={pro.price}
                        image={pro.image}
                        desc={pro.desc}
                    />
                ))}
            </div>
            <div className="flex justify-center p-4 mt-[50px]">
                    <button onClick={prevPage} disabled={page === 1} className="px-4 py-2 mx-1 rounded-lg">Previous</button>
                    {renderPageNumbers(data)}
                    <button onClick={nextPage} disabled={isLoading } className="px-4 py-2 mx-1 rounded-lg">Next</button>
                </div>
            
    </main>
  )
}
