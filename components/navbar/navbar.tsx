'use client'

import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import {MenuList} from "@/components/navbar/menu";
import {useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import '@/app/globals.css'
import { IoCart } from "react-icons/io5";
type MenuItems = {
    title:string,
    path:string,
    active:boolean
}
export default function NavbarComponent() {
    const[menu,setMenu] = useState<MenuItems[]>(MenuList)
    const pathName = usePathname();
    return (
        <Navbar >
            <NavbarBrand href="https://flowbite-react.com">
                <img src="https://istad.co/resources/img/CSTAD_120.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Cambo Product</span>
            </NavbarBrand>
             <div className="flex md:order-2">
                <div>   
                    <IoCart className="text-5xl mr-2 text-yellow-500" />
                    </div>
                <div>
                <Button className="bg-red-500">Login</Button>
                </div>
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                {menu.map((pro,key)=>(
                    <NavbarLink
                      key={key}
                      as={Link}
                      href={pro.path}
                      active={pro.path === pathName}
                    >
                        {pro.title}
                    </NavbarLink>
                ))}
            </NavbarCollapse>
        </Navbar>
    );
}
