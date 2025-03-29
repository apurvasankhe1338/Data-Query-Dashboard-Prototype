import { useSelector } from "react-redux";

const QueryHistory = () => {
  const queries = useSelector((state) => state.query.queries);

  return (
    <div className="p-4 sm:w-[40%] bg-gray-600 rounded-xl border-red-700 border">
      <h3 className="text-lg font-semibold mb-2 text-white">Query History</h3>
      <ul>
        {queries.map((q, index) => (
          <li key={index} className=" bg-yellow-100 border-2 hover:shadow-md hover:shadow-yellow-600 hover:cursor-pointer p-3 rounded-3xl text-black my-2">{q}</li>
        ))}
      </ul>
    </div>
  );
};

export default QueryHistory;
