import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from './routes/MainRoutes';
import Netflix from './components/Netflix/Netflix'

function App() {
  return (
    <>
      <Netflix/>
      {/* <Navbar /> */}
      <MainRoutes />
      <Footer/>
    </>
  );
}

export default App;
