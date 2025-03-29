import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ResultDisplay = () => {
  const { results, loading, error } = useSelector((state) => state.query);

  if (loading) return <p className="text-center text-2xl font-bold text-white">Processing query...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!results) return <p className="text-center font-semibold text-red-500">No data to display</p>;

  const chartData = results.data.map((value, index) => ({ name: `Item ${index + 1}`, value }));

  return (
    <div className=" bg-green-100 p-4 border rounded-2xl md:w-[55%] my-2">
      <h3 className="text-lg text-black font-bold">{results.message}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultDisplay;
