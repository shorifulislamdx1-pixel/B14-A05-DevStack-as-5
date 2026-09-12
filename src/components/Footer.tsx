import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">

      <div className="container mx-auto py-12">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          <div>
            <img
              src={Logo}
              alt="Dev Stack"
              className="w-24"
            />

            <p className="mt-3 max-w-xs text-xs leading-5 text-gray-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-4 text-xs text-gray-500">
              <span>GitHub</span>
              <span>Twitter</span>
              <span>LinkedIn</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-900">
              Product
            </h3>

            <ul className="mt-4 space-y-3 text-xs text-gray-500">
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-900">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-xs text-gray-500">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-900">
              Legal
            </h3>

            <ul className="mt-4 space-y-3 text-xs text-gray-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-100 pt-5">

          <div className="flex flex-col justify-between gap-3 text-xs text-gray-400 md:flex-row">

            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-5">
              <span>Privacy</span>
              <span>Terms</span>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;