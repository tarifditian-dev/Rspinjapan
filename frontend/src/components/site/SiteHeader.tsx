import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "@/lib/site";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header data-testid="site-header" className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,padding,box-shadow] duration-300 ${scrolled ? "border-[#241b18]/10 bg-[#f7f1e8]/95 py-3 text-[#241b18] shadow-[0_8px_30px_rgba(36,27,24,.08)] backdrop-blur-xl" : "border-[#f7f1e8]/15 bg-[#820000]/95 py-5 text-[#fffaf2]"}`}>
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-5 md:px-10">
        <Link to="/" data-testid="header-logo-link" className="group flex items-center gap-3">
          <span data-testid="header-logo-mark" className={`font-japanese text-2xl leading-none transition-transform duration-300 group-hover:-translate-y-0.5 ${scrolled ? "text-[#a80000]" : "text-[#e7c36d]"}`}>日</span>
          <span data-testid="header-logo-wordmark" className="flex flex-col leading-none"><span className="font-display text-xl tracking-[-0.04em]">RSP in Japan</span><span className={`mt-1 text-[8px] font-bold uppercase tracking-[0.28em] ${scrolled ? "text-[#a80000]" : "text-[#e7c36d]"}`}>Learn · Live · Belong</span></span>
        </Link>
        <nav aria-label="Main navigation" data-testid="desktop-navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => <Link key={item.href} to={item.href} data-testid={`header-nav-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className={`text-[10px] font-bold uppercase tracking-[0.14em] transition-colors duration-200 hover:text-[#d5a33e] ${location.pathname === item.href ? (scrolled ? "text-[#a80000]" : "text-[#e7c36d]") : ""}`}>{item.label}</Link>)}
        </nav>
        <Link to="/success-stories#contact" data-testid="header-cta-link" className={`hidden items-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] transition-transform duration-200 hover:-translate-y-0.5 sm:flex ${scrolled ? "bg-[#a80000] text-[#fffaf2]" : "bg-[#e7c36d] text-[#241b18]"}`}>Begin here <ArrowUpRight size={13} /></Link>
        <button type="button" aria-label={open ? "Close menu" : "Open menu"} data-testid="mobile-menu-toggle" onClick={() => setOpen((value) => !value)} className="rounded-full p-2 lg:hidden"><span className="sr-only">Menu</span>{open ? <X size={21} /> : <Menu size={21} />}</button>
      </div>
      {open && <nav aria-label="Mobile navigation" data-testid="mobile-navigation" className="absolute inset-x-0 top-full border-b border-[#241b18]/10 bg-[#f7f1e8] px-5 py-4 text-[#241b18] shadow-lg lg:hidden">
        {navItems.map((item) => <Link key={item.href} to={item.href} data-testid={`mobile-nav-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="block border-b border-[#241b18]/10 py-4 text-xs font-bold uppercase tracking-[0.14em] last:border-0">{item.label}</Link>)}
      </nav>}
    </header>
  );
}