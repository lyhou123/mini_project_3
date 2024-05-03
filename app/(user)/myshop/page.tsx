'use client'
import { ProductType } from '@/lib/constans';
import React, { useEffect, useState } from 'react'
import { Button, Modal } from "flowbite-react";
import DataTable, { TableColumn } from 'react-data-table-component';
import { useRouter } from 'next/navigation';
import "@/app/globals.css"
import { SearchComponent } from '@/components/seach_button/searchButton';
import { useGetProductsQuery } from '@/redux/service/product';

const placeHolderImage = 'https://via.placeholder.com/150'


export default function DashBoard() {
  const router=useRouter()
  
  const  [loading,setLoading]=useState(false)
  const[openModal,setOpenModal]=useState(false)
  const[productdetail,setProductDetail]=useState<ProductType>()

  //get data from RTK query
   const {data,isLoading,isFetching}=useGetProductsQuery({page:1,pageSize:10})
   const [products, setProducts] = useState([]);

   useEffect(() => {
       if (!isLoading && data) {
           setProducts(data); 
       }
   }, [data, isLoading]);

 
const ProductDetail=(product:ProductType)=>{
  setProductDetail(product)
  setOpenModal(true)
}



  const columns:TableColumn<ProductType>[] = [
    {
        name:'ID',	
        selector:row=>row.id,
        sortable:true,
    },
    {
      name: 'Product Title',
      selector: row => row.name,
      style: {
        backgroundColor: '#f1f1f1',
        textAlign: 'center',
      },
    },
    {
     name:'Seller',
      selector:row=>row.seller,
    },
    {
      name: 'Price (USD)',
      selector: row => row.price +" $",
      sortable:true,
      style: {
        backgroundColor: '#f1f1f1',
        textAlign: 'center',
      },

    },
    {
      name: 'Image',
      selector: (row):JSX.Element|any => <img className='w-[80px] h-[70px]' src={row.image} width={500} height={500}  alt={row.name}/>,
    },

    {
      name: "Action", 
      selector: row => 
        <React.Fragment> 
          <button className='bg-blue-700 text-base text-white py-2 px-4 rounded mr-1'onClick={()=>ProductDetail(row)}>view</button> 
           <button className='bg-green-700 text-base text-white py-2 px-4 rounded mr-1' onClick={() =>router.push(`/edit/${row.id}`)}>Edit</button>
           <button className='bg-red-700 text-base text-white py-2 px-4 rounded mr-1'>Delete</button> 
        </React.Fragment>
    } 
    
  ];
  return (
    <main>
        <SearchComponent/>
       <section className='mt-[20px]'>
      </section>
       <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Product Details</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <img src={productdetail?.image||placeHolderImage} width={500} height={500} alt={productdetail?.name||"Untitle"} className="w-full h-96 object-fit" />
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {productdetail?.desc}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
             {productdetail?.name}
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <DataTable className=' container mx-auto'  progressPending={loading} customStyles={customStyles}	columns={columns} data={products} pagination persistTableHead/>
    </main>
  )
}
  const customStyles = {
    rows: {
      style: {
        minHeight: "20px", 
      },
    },
    headCells: {
      style: {
        paddingLeft: "38px", 
        paddingRight: "8px",
        fontSize: "14px",
        // backgroundColor: "#f1f1f1",
      },
    },
    cells: {
      style: {
        paddingLeft: "20px",
        fontSize: "13px",
        
      },
    },
  };  