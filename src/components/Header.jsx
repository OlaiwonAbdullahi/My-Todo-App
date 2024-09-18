import Logo from "../assets/Logo.svg";
import github from "../assets/github.svg";
export default function Header() {
  return (
    <div className=" flex h-14 ">
      <div className="">
        <img src={Logo}></img>
      </div>
      <div className="">
        <img src={github} alt="" className="h-12 w-12" />
      </div>
    </div>
  );
}
