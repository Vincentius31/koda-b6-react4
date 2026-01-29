import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6">
      <h1 className="font-serif tracking-wide">Gourmet au Catering</h1>
      <ul className="flex gap-8 text-gray-700">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </header>
  );
};
