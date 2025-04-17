import $ from "jquery";

export default function Navbar() {
  //   const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    // mobileMenu.classList.toggle("hidden");
    $("#mobile-menu").toggleClass("hidden");
  };

  //   menuBtn.addEventListener("click", () => {});
  return (
    <>
      <nav className="bg-teal-600 shadow-md p-6" >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* <!-- Logo --> */}
          <div >
            <img src="/images/logo-icsap.png" alt="" width="150"/>
          </div>

          {/* <!-- Hamburger Icon (Mobile) --> */}
          <div className="md:hidden">
            <button
              id="menu-btn"
              className="text-gray-800 focus:outline-none cursor-pointer"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              > */}
              {/* <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path> */}
              {/* </svg> */}
            </button>
          </div>

          {/* <!-- Menu Items --> */}
          <ul
            id="menu"
            className="hidden md:flex space-x-6 text-gray-700 font-medium"
          >
            <li>
              <a href="#" className="hover:scale-150 transition-transform duration-300 text-white">
                Home
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:text-blue-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Contact
              </a>
            </li> */}
          </ul>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div
          id="mobile-menu"
          className="md:hidden hidden mt-4 "
        >
          <ul className="space-y-2 text-gray-700 font-medium text-right">
            <li>
              <a href="#" className="block hover:text-blue-600 transition">
                Home
              </a>
            </li>
            {/* <li>
              <a href="#" className="block hover:text-blue-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-600 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-600 transition">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}
