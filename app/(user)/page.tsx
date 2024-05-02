import Image from "next/image";
import HeroSectionComponent from "@/components/hero/HeroSectionComponent";
import '@/app/globals.css'
import CarouselComponent from "@/components/hero/courolsel";
import Products from "@/components/product/products";
import SectionComponent from "@/components/section/section";
export default function Home() {
  return (
    <main>
      <HeroSectionComponent/>
	   <SectionComponent/>
        <CarouselComponent/>
        <section>
          <p className="text-xl font-bold container mx-auto my-9">Popular Products</p>
          <Products/>
        </section>
		</main>
		  );
		}
// 'use client'
// import {useSession, signIn, signOut } from "next-auth/react";

  
// //     </main>
// //   );
// // }


// export default function Home() {
// 	// Get products with generated hook

// 	const { data: session } = useSession();
// 	// console.log(session);

// 	// if user is not signed in
// 	if (!session) {
// 		return (
// 			<main className="w-full h-screen flex flex-col justify-center items-center">
// 				<p className="text-2xl mb-2">Not Signed In</p>
// 				<button
// 					className="bg-blue-600 py-2 px-6 rounded-md text-white mb-2"
// 					onClick={() => signIn("google")}
// 				>
// 					Sign in with google
// 				</button>
// 				<button
// 					className="bg-none border-gray-300 border py-2 px-6 rounded-md mb-2"
// 					onClick={() => signIn("github")}
// 				>
// 					Sign in with github
// 				</button>
// 			</main>
// 		);
// 	}

// 	return (
// 		<main className="w-full h-screen flex flex-col justify-center items-center">
// 			<div className="w-44 h-44 relative mb-4">
// 				<img
// 					src={session.user?.image as string}
				
// 					alt=""
// 					className="object-cover rounded-full"
// 				/>
// 			</div>
// 			<p className="text-2xl mb-2">
// 				Welcome <span className="font-bold">{session.user?.name}</span>. Signed
// 				In As
// 			</p>
// 			<p className="font-bold mb-4">{session.user?.email}</p>
// 			<button
// 				className="bg-red-600 py-2 px-6 rounded-md"
// 				onClick={() => signOut()}
// 			>
// 				Sign out
// 			</button>
// 		</main>
// 	);
// }