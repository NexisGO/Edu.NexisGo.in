import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="h-screen flex" >
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] bg-red-200">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
        <Image src="/logo.png" alt="logo" width={32} height={32}/>
        <span className="hidden lg:block">Edu.NexisGo</span>
        </Link>
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] bg-blue-200"></div>
    </div>;
  }