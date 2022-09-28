import { ToastContainer } from "react-toastify";
import "./App.css";
import Activities from "./Components/Activities/Activities";
import Blogs from "./Components/Blogs/Blogs";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Activities></Activities>
      <Blogs></Blogs>
      <ToastContainer position="top-center"></ToastContainer>
    </div>
  );
}

export default App;
