'use client'

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavAndFooter = pathname?.startsWith('/login') || pathname?.startsWith('/admin');

  if (hideNavAndFooter) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}
