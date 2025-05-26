import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "../components/convex-client-provider";





const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Splitr",
  description: "The smartest way to split expenses with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.classname}`}>
      <ConvexClientProvider>
      <ClerkProvider>
      <Header/>
      <main className='min-h-screen'>
        {children}
      </main>
      </ClerkProvider>
      </ConvexClientProvider>
      </body>
    </html>
  );
}
