import logo from "./logo.svg";
import "./App.css";
// import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "../src/Details";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      {/* <p>Testing</p> */}
      <Details />
      <ToastContainer />
    </div>
  );
}

export default App;
