export default function Header() {
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
      <nav
        className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto"
        aria-label="Global"
      >
        <h1 className="font-medium w-full">Roll List</h1>
      </nav>
    </header>
  );
}
