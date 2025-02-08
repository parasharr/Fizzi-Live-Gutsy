import localFont from 'next/font/local'

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "./app.css"
import Header from '@/components/Header';
import ViewCanvas from '@/components/ViewCanvas';


// Font files can be colocated inside of `app`
const alpino = localFont({
  src: '../../public/fonts/Alpino-Variable.woff2',
  display: 'swap',
  weight: "100 900",
  variable: "--font-alpino"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={alpino.variable}>
      <body className='overflow-x-hidden bg-yellow-300'>
        <Header />
        <main>
        {children}
        <ViewCanvas />
        </main>
  
        </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
