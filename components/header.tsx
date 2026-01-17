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

            {/* <NavigationMenu viewport={isMobile}> */}
            <NavigationMenu className="w-full fixed px-6 pt-6 w-full z-50 select-none inset-x-0">
                <NavigationMenuList className="min-w-full flex flex-row gap-6 p-2 justify-between bg-black/50 rounded-sm">



                    <div>
                        <NavigationMenuItem className="bg-transparent">
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/" className="group/logo">
                                    <Image
                                        src="/resources/logo/OpenDriveLab/D.png"
                                        alt="OpenDriveLab"
                                        width={24}
                                        height={24}
                                        className="group-hover/logo:scale-125 transition delay-100 duration-200"
                                    />
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </div>



                    <div className="flex gap-2">



                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/docs">Documents</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>



                        <NavigationMenuItem className="hidden md:block">
                            <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                                List
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-4">
                                <li>
                                    <NavigationMenuLink asChild>
                                    <Link href="#">
                                        <div className="font-medium">Components</div>
                                        <div className="text-muted-foreground">
                                        Browse all components in the library.
                                        </div>
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="#">
                                        <div className="font-medium">Documentation</div>
                                        <div className="text-muted-foreground">
                                        Learn how to use the library.
                                        </div>
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="#">
                                        <div className="font-medium">Blog</div>
                                        <div className="text-muted-foreground">
                                        Read our latest blog posts.
                                        </div>
                                    </Link>
                                    </NavigationMenuLink>
                                </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>



                        <NavigationMenuItem className="hidden md:block">
                            <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                                Comnnunity
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[200px] gap-4">
                                <li>
                                    <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row items-center gap-2">
                                        <CircleHelpIcon />
                                        Backlog
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row items-center gap-2">
                                        <CircleIcon />
                                        To Do
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row items-center gap-2">
                                        <CircleCheckIcon />
                                        Done
                                    </Link>
                                    </NavigationMenuLink>
                                </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>



                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/docs">Buy</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>



                    </div>



                </NavigationMenuList>
            </NavigationMenu>



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
