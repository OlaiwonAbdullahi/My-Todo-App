export default function Sorting() {
  return (
    <div className=" flex justify-center bottom-0 sticky mb-0 gap-2 font-titalium">
      <span>Sort By:</span>
      <select
        name=""
        id=""
        className="bg-bgColor border border-hrColor rounded-lg accent-hrColor"
      >
        <option value="">All</option>
        <option value="">Active</option>
        <option value="">Completed</option>
      </select>
    </div>
  );
}
