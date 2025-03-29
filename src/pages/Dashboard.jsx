import QueryInput from "../components/QueryInput";
import QueryHistory from "../components/QueryHistory";
import ResultDisplay from "../components/ResultDisplay";

const Dashboard = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">AI Data Query Dashboard</h2>
      <QueryInput />
      <div className="sm:flex sm:gap-2">
      <QueryHistory />
      <ResultDisplay />
      </div>
    </div>
  );
};

export default Dashboard;
