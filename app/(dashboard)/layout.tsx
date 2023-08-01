import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
const DashboardLayout = async ({
  children
}: {
  children: React.ReactNode
}) => {
  const apiLimitCount = await  getApiLimitCount();
  return ( 
    <div className="h-full relative">
      {/* sidebar */}
      <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <Sidebar apiLimitCount={apiLimitCount} />
      </div>

      {/* main */}
      <main className="md:pl-72">
        <Navbar/>
        {children}
      </main>
    </div>
);
}
export default DashboardLayout;