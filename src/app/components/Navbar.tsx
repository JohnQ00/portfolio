import Link from 'next/link';

export default function Navbar() {
    return (
      <nav className="fixed top-0 w-full z-10 bg-gray-900 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="font-bold text-lg text-white">John Pires | Portfolio</Link>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-white hover:text-gray-400">Home</Link>
            <span className="text-gray-600">|</span>
            <Link href="/about" className="text-white hover:text-gray-400">About</Link>
            <span className="text-gray-600">|</span>
            <Link href="/projects" className="text-white hover:text-gray-400">Projects</Link>
            <span className="text-gray-600">|</span>
            <Link href="/contact" className="text-white hover:text-gray-400">Contact</Link>
          </div>
        </div>
      </nav>
    );
  }
  