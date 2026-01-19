import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "OpenDriveLab | Robotics and Autonomous Driving at HKU and Beyond",
    description: "OpenDriveLab is committed to exploring cutting-edge embodied AI technology, launching a series of benchmarking work, open source to serve the community, and promote the common development of the industry. Friends who are committed to making influential research are welcome to join!",
    keywords: ["OpenDriveLab", "Robotics", "Embodied AI", "Autonomous Driving", "HKU" ],
};



import Image from 'next/image'
import Link from "next/link"
import { AspectRatio } from "@/components/ui/aspect-ratio"



export default function Home() {

    return (
        <div className="w-full">


            <div className="w-full h-svh overflow-hidden">
                <video autoPlay muted loop playsInline poster="https://assets.kinetixai.cn/kinetixai/index/banner-20251212.jpg" className="w-full h-full object-cover">
                    <source src="https://assets.kinetixai.cn/AMS/251212_raw.mp4" type="video/mp4" />
                </video>
            </div>



            <div className="w-full px-6 flex justify-center mt-36">
                <div className="w-full max-w-7xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#features" className="scroll-mt-32 group flex items-center" id="features">
                            Features
                            <span className="ml-6 hidden group-hover:inline-block size-6 text-foreground">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                    <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </Link>
                    </h2>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-12">
                <div className="w-full max-w-7xl flex flex-col gap-6 leading-relaxed">
                    <p>
                        We are searching for talents from all over the world. Are you looking for opportunities? Don't hesitate to contact us via <Link className="text-o-blue animated-underline" href="mailto:contact@opendrivelab.com">contact@opendrivelab.com</Link> or <Link className="text-o-blue animated-underline" href="https://lihongyang.info" target="_blank">Dr. Hongyang Li</Link>.
                    </p>
                    <ul className="ml-6 space-y-3 list-outside list-disc">
                        <li>
                            具身智能研究員 / 自動駕駛研究員 / 機器人硬件工程師 / 科研助理 / 生態合作助理 <Link className="text-o-blue animated-underline" href="/recruit">【更多詳情】</Link>
                        </li>
                        <li>
                            Ph.D. student / Research Assistant / Postdoc / <i>etc.</i> in Hong Kong and Shanghai
                        </li>
                        <li>
                            Full-time employee and Intern (international are welcome)
                        </li>
                    </ul>
                </div>
            </div>



        </div>
    )
}
