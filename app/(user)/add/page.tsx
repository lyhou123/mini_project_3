"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./style.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProductPostType ,initialValues } from "@/lib/constans";
import { useCreateProductMutation } from "@/redux/service/product";
import { on } from "events";


const FILE_SIZE = 1024 * 1024 * 2; // 2MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

const validationSchema = Yup.object().shape({
	categoryName: Yup.string().required("Required"),
	name: Yup.string().required("Required"),
	desc: Yup.string().nullable(),
	price: Yup.number().required("Required"),
	quantity: Yup.number().required("Required"),
	fileIcon: Yup.mixed()
		.test("fileFormat", "Unsupported Format", (value: any) => {
			if (!value) {
				return true;
			}
			return SUPPORTED_FORMATS.includes(value.type);
		})
		.test("fileSize", "File Size is too large", (value: any) => {
			if (!value) {
				true;
			}
			return value.size <= FILE_SIZE;
		})

		.required("Required"),
	fileProduct: Yup.mixed()
		.test("fileFormat", "Unsupported Format", (value: any) => {
			if (!value) {
				return true;
			}
			return SUPPORTED_FORMATS.includes(value.type);
		})
		.test("fileSize", "File Size is too large", (value: any) => {
			if (!value) {
				true;
			}
			return value.size <= FILE_SIZE;
		})

		.required("Required"),
});

export default function Product() {
	const router=useRouter()

	//fetch data from RTK query
	
	const[createProduct,{data,error}]=useCreateProductMutation()
	//submit form
	const handleCreateProduct = async (values:any) =>({
		createProduct:({
			createProduct:{
				categoryName:values.categoryName,
				name:values.name,
				desc:values.desc,
				image:values.fileProduct,
				price:values.price,
				quantity:values.quantity,
				fileIcon:values.fileIcon
			}
		})
		
	})

	return (
		<main className={`${style.container}`}>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={async (values:any) => {
					console.log(values);
                
				}}
			>
				{({ setFieldValue }:any) => (
					<Form className=" p-4 rounded-lg w-full container mx-auto">
						
						{/* Product Name */}
                        <div className="mb-4">
                            <button onClick={()=>router.push(`/myshop`)} className='text-yellow-500'>Back</button>
                        </div>
                        <div className={`${style.title}`}>
                            <div>
                        <h1 className={`${style.title}`}>
                            Create Product
                            </h1>
                        </div>
                        <div>
                            <button className='bg-yellow-500 hover:bg-transparent hover:text-red-500 text-white text-base rounded-lg py-2 px-3'>Upload Image</button>
                        </div>

                            </div>
						<div className="mb-5">
							<label className={`${style.label}`} htmlFor="name">
								Product Name
							</label>
							<Field
								type="text"
								name="name"
								id="name"
								className={`${style.input}`}
							/>
							<ErrorMessage
								name="name"
								component="div"
								className={`${style.error}`}
							/>
					

						{/* Product Description */}
						<div className="mb-5">
							<label className={`${style.label}`} htmlFor="desc">
								Product Description
							</label>
							<Field
								type="text"
								name="desc"
								id="desc"
								component="textarea"
								className={`${style.input}`}
							/>
							<ErrorMessage
								name="desc"
								component="div"
								className={`${style.error}`}
							/>
						</div>

						{/* Product Price */}
						<div className="mb-5">
							<label className={`${style.label}`} htmlFor="price">
								Product Price
							</label>
							<Field
								type="number"
								name="price"
								id="price"
								className={`${style.input}`}
							/>
							<ErrorMessage
								name="price"
								component="div"
								className={`${style.error}`}
							/>
						</div>

						{/* Product Quantity */}
						<div className="mb-5">
							<label className={`${style.label}`} htmlFor="price">
								Product Quantity
							</label>
							<Field
								type="number"
								name="quantity"
								id="quantity"
								className={`${style.input}`}
							/>
							<ErrorMessage
								name="quantity"
								component="div"
								className={`${style.error}`}
							/>
						</div>

						{/* Product Category */}
						<div className="mb-5">
							<label className={`${style.label}`} htmlFor="categoryName">
								Product Category Name
							</label>
							<Field
								type="text"
								name="categoryName"
								id="categoryName"
								className={`${style.input}`}
							/>
							<ErrorMessage
								name="categoryName"
								component="div"
								className={`${style.error}`}
							/>
						</div>
                        </div>
						{/* Product Category Icon*/}
                        <div>
						<div className="mb-5 mt-6  w-[300px] ">
							<label className={`${style.label}`} htmlFor="categoryIcon">
								Product Category Icon
							</label>
							<Field
								type="file"
								name="fileIcon"
								id="fileIcon"
								component={CustomInput}
								setFieldValue={setFieldValue}
								className={`${style.input}`}
							/>
							<ErrorMessage
								name="fileIcon"
								component="div"
								className={`${style.error}`}
							/>
						</div>

						{/* Product Image*/}
						<div className="mb-5 w-[300px] ">
							<label className={`${style.label}`} htmlFor="fileProduct">
								Product Image
							</label>
							<Field
								type="file"
								name="fileProduct"
								id="fileProduct"
								component={CustomInput}
								setFieldValue={setFieldValue}
								className={`${style.input}`}
							/>
							<ErrorMessage
								name="fileProduct"
								component="div"
								className={`${style.error}`}
							/>
						</div>

						{/* button submit */}
						<button type="submit" className={`${style.button}`} >
							Submit
						</button>
						<button onClick={()=>router.push(`/myshop`)} type="submit" className='bg-red-600 text-white px-3 py-2 ml-2 rounded-lg' >
							Cancel
						</button>
                        </div>
					</Form>
				)}
			</Formik>
        
		</main>
	);
}

const CustomInput = ({ field, form, setFieldValue }: any) => {
	const [imagePreview, setImagePreview] = useState("");

	const handleUploadeFile = (e: any) => {
		const file = e.target.files[0];
		const localUrl = URL.createObjectURL(file);
		console.log(localUrl);
		setImagePreview(localUrl);

		setFieldValue(field.name, file);
	};
	return (
		<div>
			<input onChange={(e) => handleUploadeFile(e)} type="file" />
			{imagePreview && <img src={imagePreview} alt="preview" />}
		</div>
	);
};
