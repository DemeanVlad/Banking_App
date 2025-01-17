import SideBar from "@/components/ui/SideBar";
import { Children } from "react";
import  Image  from "next/image";
import MobileNav from "@/components/ui/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: 'Vlad', lastName: 'Demean' };

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
        <Image 
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="logo"
          
          />
          <div>
            <MobileNav user={loggedIn}/>
          </div>
        </div>
        {children}
      </div>
    
    </main>
  );
}
