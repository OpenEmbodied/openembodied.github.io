import * as React from "react"



import { Footer } from "@/components/footer"



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='w-full overflow-hidden'>

            {children}

            <Footer />

        </main>
    );
}
