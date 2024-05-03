'use client'
import React, { useEffect, useState } from 'react'
import { ImageType } from '@/lib/constans'
import { useGetImagesQuery } from '@/redux/service/product'
export default function Dropdown() {
   
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const[props,setProps]=useState([])
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const{data,isLoading,isFetching}=useGetImagesQuery({page:page,pageSize:pageSize})
    const totalPages = Math.ceil(data?.total/ pageSize) || 4;
    console.log(data?.total)
    console.log(totalPages)
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    useEffect(()=>{
        if(!isLoading && data){
            setProps(data.results)
        }
    },[data,isLoading])

   const handleSelect=(index:number)=>{
         setSelectedPhoto(props[index].image)
   }

   const nextPage = () => {
    setPage(page + 1);
};

const prevPage = () => {
    if (page > 1) {
        setPage(page - 1);
    }
};

const renderPageNumbers = () => {
    const pagesToShow = [];
    const totalPageCount = Math.ceil(data?.total / pageSize);
    const maxPageNumberToShow = 5; // You can adjust this number based on your preference

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
    <main className="w-[25%] container mx-auto ">
  <details className="group [&_summary::-webkit-details-marker]:hidden mx-auto" open>
    <summary
      className="flex  mx-auto cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h2 className="font-medium">Select Images</h2>

      <svg
        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>
     {props.map((image:ImageType,index)=>
                <div key={index} className="flex items-center justify-between gap-4 p-4 bg-gray-50">
                    <img src={image.image} alt={image.name} className="w-20 h-20 object-cover rounded-lg" onClick={()=>handleSelect(index)}/>
                    <h3 className="text-gray-900">{image.name}</h3>
                </div>
        
     )}

<div className="flex justify-center p-4">
                    <button onClick={prevPage} disabled={page === 1} className="px-4 py-2 mx-1 rounded-lg">Previous</button>
                    {renderPageNumbers()}
                    <button onClick={nextPage} disabled={isLoading || isFetching} className="px-4 py-2 mx-1 rounded-lg">Next</button>
                </div>
  </details>
  {selectedPhoto && <img src={selectedPhoto} alt="" />}
</main>
  )
}
