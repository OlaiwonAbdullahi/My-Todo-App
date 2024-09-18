import Logo from "../assets/Logo.svg";
import github from "../assets/github.svg";
export default function Header() {
  return (
    <>
      <div className=" flex h-14 justify-between font-titalium p-3 sticky top-0 z-10 bg-bgColor mb-3">
        <div className=" flex gap-3">
          <img src={Logo} className="h-12 w-12"></img>
          <span className="mt-3">My Todo App</span>
        </div>
        <div className="" data-tooltip-target="tooltip-default">
          <a href="https://github.com/OlaiwonAbdullahi/My-Todo-App">
            <img src={github} alt="" className="h-12 w-12" />
          </a>
          <div
            id="tooltip-default"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Tooltip content
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
      <hr className=" mt-3 border-hrColor" />
    </>
  );
}
