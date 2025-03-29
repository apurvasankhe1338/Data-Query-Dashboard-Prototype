import { Provider } from "react-redux";
import { store } from "./redux/store";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    
    <Provider store={store}>
      <Navbar/>
      <Dashboard />
      <Footer/>
    </Provider>
  );
};

export default App;
