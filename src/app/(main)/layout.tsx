import Header from "@/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className=" mx-auto flex flex-col w-screen h-screen !bg-white">
        <Header />
        <div className="w-full bg-white">{children}</div>
      </main>
    </div>
  );
}
