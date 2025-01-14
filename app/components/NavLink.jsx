import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
<<<<<<< HEAD
      className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-[#ADB7BE]"
=======
      className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-white"
>>>>>>> e606bd33847ca8b3755eb6e536ef214f14d2444b
    >
      {title}
    </Link>
  );
};

export default NavLink;