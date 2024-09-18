export default function Form() {
  return (
    <div className="mt-8 flex justify-center font-titalium mb-8">
      <input
        type="text"
        placeholder="Add a Task"
        className="bg-bgColor  border rounded-l-md w-1/3 text-textColor p-2 "
      />
      <button className="border border-textColor rounded-e-lg p-1 w-20">
        Add
      </button>
    </div>
  );
}
