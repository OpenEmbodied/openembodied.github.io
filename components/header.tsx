"use client"



import * as React from "react"
import Link from "next/link"
import Image from 'next/image'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"



import { usePathname } from 'next/navigation';
// import { useIsMobile } from "@/hooks/use-mobile"



import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"



export function Header() {

    const pathname = usePathname()
    // const isMobile = useIsMobile()

    return (
        <header key={pathname} className="w-svh z-20">


            {/* <NavigationMenu viewport={isMobile}> */}
            <NavigationMenu className="fixed rounded-sm m-6 p-2 w-full bg-amber-600">
                <NavigationMenuList className="w-full flex-row gap-6 justify-between">



                    <div>
                        <Button className="bg-background text-foreground hover:bg-white">
                            <Link href="/" className="select-none">
                                <Image
                                    src="/resources/logo/OpenDriveLab/D.png"
                                    alt="OpenDriveLab"
                                    width={24}
                                    height={24}
                                    className="hover:scale-125 transition delay-100 duration-200"
                                />
                            </Link>
                            <div className="h-full min-w-0.5 bg-foreground/50 select-none" />
                            <Link href="https://mmlab.hk/" target="_blank" className="select-none">
                                <Image
                                    src="/resources/logo/OpenDriveLab/HKU_MMLAB.png"
                                    alt="OpenDriveLab"
                                    width={24}
                                    height={24}
                                    className="hover:scale-125 transition delay-100 duration-200"
                                />
                            </Link>
                        </Button>
                    </div>



                    <div className="flex gap-6">



                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                    <a
                                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                                        href="/"
                                    >
                                        <div className="mb-2 text-lg font-medium sm:mt-4">
                                        shadcn/ui
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                        Beautifully designed components built with Tailwind CSS.
                                        </p>
                                    </a>
                                    </NavigationMenuLink>
                                </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>



                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/docs">Docs</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>



                        <NavigationMenuItem className="hidden md:block">
                            <NavigationMenuTrigger>List</NavigationMenuTrigger>
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
                            <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
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



                    </div>



                </NavigationMenuList>
            </NavigationMenu>



            <div className="fixed right-0 bottom-0 m-6">
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
