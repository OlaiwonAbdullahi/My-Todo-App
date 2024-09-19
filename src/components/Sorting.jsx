export default function Sorting({ handleSortChange }) {
  return (
    <div className="w-full flex justify-center items-center fixed bottom-0 mb-0 gap-2 font-titalium h-14">
      <span>Sort By:</span>
      <select
        className="bg-bgColor border border-hrColor rounded-lg accent-hrColor"
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}
