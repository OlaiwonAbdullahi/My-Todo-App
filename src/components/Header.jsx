import Logo from "../assets/Logo.svg";
import github from "../assets/github.svg";
export default function Header() {
  return (
    <>
      <div className=" flex h-14 justify-between font-titalium p-3 sticky top-0">
        <div className=" flex gap-3">
          <img src={Logo} className="h-12 w-12"></img>
          <span className="mt-3">My Todo App</span>
        </div>
        <div className="">
          <img src={github} alt="" className="h-12 w-12" />
        </div>
      </div>
      <hr className=" mt-3 border-hrColor" />
    </>
  );
}
