import Logo from "../assets/Logo.svg";
import github from "../assets/github.svg";
//import sun from "../assets/sun.svg";

export default function Header() {
  return (
    <>
      <div className="flex h-14 justify-between items-center font-titalium p-3 sticky top-0 z-10 bg-bgColor mb-3 shadow-md">
        <div className="flex items-center gap-3">
          <img src={Logo} className="h-12 w-12" alt="Logo" />
          <span className="text-lg sm:text-xl">My Todo App</span>
        </div>
        <div className="flex gap-3 mr-4">
          <a
            href="https://github.com/OlaiwonAbdullahi/My-Todo-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" className="h-10 w-10" />
          </a>
          {/*<img src={sun} alt="LightMode" className="h-9 w-9" />*/}
        </div>
      </div>
      <hr className="border-hrColor" />
    </>
  );
}
