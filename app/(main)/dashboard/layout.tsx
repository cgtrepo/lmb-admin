import LmbDashboardSidebar from "./(components)/lmb-dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* SIDEBAR */}
      <div className="px-6 flex">
        <LmbDashboardSidebar />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col">
        {/* PAGE CONTENT */}
        <main className="p-4 md:px-6 md:pb-6 md:pt-0">{children}</main>
      </div>
    </div>
  );
}
