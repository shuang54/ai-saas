import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/navbar";

const DashboardLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return ( 
    <div className="h-full relative">
      {/* sidebar */}
      <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar/>
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