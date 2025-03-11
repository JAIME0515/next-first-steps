export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-col items-center p-24">
        <div className="text-7xl">Layout General</div>
        {children}
      </main>
    </>
  );
}
