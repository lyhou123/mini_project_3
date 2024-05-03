
"use client";

import { Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";

export function SearchComponent() {
  const router = useRouter()
  return (
    <div className="flex justify-between gap-[30px] mx-auto container mt-4">
      <div className="w-full ">
        <TextInput  id="base" type="text" sizing="md" />
      </div>
      <div className="">
        <button onClick={()=>router.push(`/add`)} className="bg-red-500 text-gray-100 px-3 py-2 rounded-lg">Add_Product</button>
      </div>
      <div>
     
      </div>
    </div>
  );
}
