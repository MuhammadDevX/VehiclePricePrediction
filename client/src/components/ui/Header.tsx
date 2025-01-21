import Link from "next/link";

export function Header() {
  return (
    <header className="bg-black text-green-50 py-4">
      <div className="container mx-auto px-4 flex flex-row  justify-between items-center">
        <Link href="/" className="text-2xl font-bold mb-4 text-green-50">
          Predict<span className="text-red-800">DevX</span>{" "}
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-red-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/predict" className="hover:text-red-600">
                Predict
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
