"use client"



import * as React from "react"
import { cva } from "class-variance-authority"



import Link from "next/link"
import Image from 'next/image'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { NavigationBar } from '@/components/navigation_bar';


import { usePathname } from 'next/navigation';
// import { useIsMobile } from "@/hooks/use-mobile"



import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"



const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-sm bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 bg-transparent text-white"
)



export function Header() {

    const pathname = usePathname()
    // const isMobile = useIsMobile()

    return (
        <header key={pathname}>



            <div className="relative w-full">
                <NavigationBar />
            </div>



            <div className="fixed right-0 bottom-0 m-6 z-50">
                <Link href="#" className="bg-background text-foreground hover:bg-o-blue hover:text-background rounded-full flex justify-center items-center p-2 select-none">
                    <span>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </span>
                </Link>
            </div>



        </header>
    )
}
