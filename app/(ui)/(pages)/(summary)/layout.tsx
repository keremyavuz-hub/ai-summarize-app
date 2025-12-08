import Image from "next/image";
import NavLink from "@/app/(ui)/components/navlink";
import { ScanText, SquareLibrary } from "lucide-react";
import Link from "next/link";

export default function UILayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <div className="app-shell">
      <div className="app-header">
        <div className="app-header-menu">
          <NavLink href="/summaries"><SquareLibrary />Summeries</NavLink>
          <NavLink href="/summarize"><ScanText size={14} /> Summarize</NavLink>
        </div>
      </div>

      <div className="app-body">
        <div className="side-panel">
          <div className="logo-box">
            <Link href="/">
              <Image
                src="/ai-summarize-logo-v2.png"
                alt="AI Summarizer Logo"
                width={140}
                height={140}
                style={{ aspectRatio: 691 / 757 }}
              />
            </Link>
          </div>
        </div>

        <div className="main-panel">
          {children}
        </div>
      </div>
    </div>
  </>;
}