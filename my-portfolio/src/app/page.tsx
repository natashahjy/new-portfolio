import SideBar from "@/sidebar/sidebar";

export default function Page() {
  return (
    <main className="flex p-24">
      <SideBar />
      <div className="w-full items-center font-mono text-sm lg:flex border w-1/4 p-2">
        <p className="">
          where accordion will be
        </p>
      </div>
      <div className="w-full items-center font-mono text-sm lg:flex border p-2">
          main content
      </div>
    </main>
  );
}
