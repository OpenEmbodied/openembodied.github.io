"use client"



import * as React from "react"
import Link from "next/link"
import Image from 'next/image'
import { AspectRatio } from "@/components/ui/aspect-ratio"



import { EmailSubscribe } from "@/components/mailing"



const links: {
    icon: string;
    url: string;
}[] = [
    {
        icon: 'email',
        url: 'mailto:xx@opendrivelab.com',
    },
];



export function Footer() {



    return (
        <footer className="w-full px-6 mt-36 mb-24 gap-6 flex flex-col items-center select-none">

            {/* <div className="w-full max-w-7xl flex gap-6 flex-wrap">
                {links.map((link) => (
                    <Link href={link.url} target="_blank" key={link.icon} className="size-4 md:size-5 group">
                        <AspectRatio ratio={1/1}>
                            <Image
                                src={"/resources/icon/" + link.icon + ".svg"}
                                alt={link.icon}
                                fill
                                className="group-hover:scale-125 transition delay-100 duration-200"
                            />
                        </AspectRatio>
                    </Link>
                ))}
            </div> */}

            <div className="w-full max-w-7xl text-xs">
                <EmailSubscribe />
            </div>

            <div className="w-full max-w-7xl text-xs">
                OpenEmbodied © 2026
            </div>

        </footer>
    )
}
