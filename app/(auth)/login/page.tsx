'use client'
import React, { useState } from "react";
import style from "./style.module.css";

import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { selecToken, setAssessToken } from "@/redux/feature/auth/authSlice";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
type ValueTypes = {
	email: string;
	password: string;
};

const initialValues: ValueTypes = {
	email: "",
	password: "",
};


const validationSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string().required("Required"),
});

export default function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const[user,setUser]=useState(null);
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
		// Toggle password visibility
	};

	//  handle submit
	const handleSubmit = (values: ValueTypes) => {
		setLoading(true);
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
			.then(res=>res.json())
			.then((data) => {
				console.log(data);
				setLoading(false);
				dispatch(setAssessToken(data.accessToken));
				setUser(data.user);
				console.log(data.accessToken);
			})
			.catch((error) => {
				console.error("Error:", error);
				setLoading(false);
			});	
			
	};
    
	if (loading) {
		return (
			<div className={`${style.container}`}>
				<h1 className="text-6xl text-center">Loading...</h1>
			</div>
		);
	}

	return (
		<main className={`${style.container}`}>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, actions) => {
					handleSubmit(values);
				}}
			>
				<Form className="bg-gray-100 p-4 rounded-lg w-96">
					<h1 className={`${style.title}`}>Login</h1>
					{/* Email */}
					<div className="mb-5">
						<label className={`${style.label}`} htmlFor="email">
							Email
						</label>
						<Field
							type="email"
							name="email"
							id="email"
							className={`${style.input}`}
						/>
						<ErrorMessage
							name="email"
							component="section"
							className={`${style.error}`}
						/>
					</div>
					{/* Password1 */}
					<div className="mb-5">
						<label className={`${style.label}`} htmlFor="password">
							Password
						</label>
						<div className="relative">
							<Field
								type={showPassword ? "text" : "password"}
								name="password"
								id="password"
								className={`${style.input}`}
							/>
							{!showPassword ? (
								<IoEyeOffSharp
									onClick={() => handleShowPassword()}
									className="cursor-pointer absolute right-2 top-4"
								/>
							) : (
								<IoEyeSharp
									onClick={() => handleShowPassword()}
									className="cursor-pointer absolute right-2 top-4"
								/>
							)}
						</div>
						<ErrorMessage
							name="password"
							component="section"
							className={`${style.error}`}
						/>
					</div>
					{/* button submit */}
					<button type="submit" className={`${style.button}`}>
						Login
					</button>
				</Form>
			</Formik>
		</main>
	);
}
