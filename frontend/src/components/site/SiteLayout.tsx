import type { ReactNode } from "react";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

interface SiteLayoutProps { children: ReactNode; }

export default function SiteLayout({ children }: SiteLayoutProps) {
  return <div data-testid="site-layout" className="min-h-screen bg-[#f7f1e8]"><SiteHeader /><main>{children}</main><SiteFooter /></div>;
}