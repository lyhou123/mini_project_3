'use client'

import { Avatar, Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import {MenuList} from "@/components/navbar/menu";
import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import '@/app/globals.css'
import { IoCart } from "react-icons/io5";
import {  useAppSelector } from "@/redux/hooks"
import { useSession } from "next-auth/react";
type MenuItems = {
    title:string,
    path:string,
    active:boolean
}
export default function NavbarComponent() {
    const[menu,setMenu] = useState<MenuItems[]>(MenuList)
    const count = useAppSelector((state)=> state.counter.value);
    const router = useRouter();
    const pathName = usePathname();
    const[loggedIn,setLoggedIn] = useState(false)
    const{data:session} = useSession();

    useEffect(() => {
        // Check session and update loggedIn state only once when the component mounts
        if (session) {
            setLoggedIn(true);
        }
    }, [session]);
    console.log('this is my sesstion',session)
    console.log('this is my loggedIn',loggedIn)
    return (
        <Navbar >
            <NavbarBrand href="/">
                <img src="https://istad.co/resources/img/CSTAD_120.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Cambo Product</span>
            </NavbarBrand>
             <div className="flex md:order-2">
                <div>
                    <span className="text-xl text-yellow-500 relative top-[-10px] left-8">{count}</span>
                </div>
                <div>   
                    <IoCart onClick={()=>router.push(`/cart`)} className="text-5xl mr-2 text-yellow-500" />
                    </div>
                    <div>
             {loggedIn ? (
              <Avatar img={session?.user?.image as string} alt="avatar of Jese" rounded />
                ) : (
               <Button className="bg-red-500">Login</Button>
                  )}
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
