import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-55 bg-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <img src={Logo} alt="Dev Stack" className="w-35" />

        <ul className="flex gap-6 items-center">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex gap-4 items-center">
  <button className="text-sm text-gray-600">
    Sign In
  </button>

  <button className="rounded-full bg-pink-600 px-5 py-2 text-sm font-medium text-white">
    Sign Up
  </button>
</div>
      </div>
    </nav>
  );
};

export default Nav;