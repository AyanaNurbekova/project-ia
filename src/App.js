import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import '../src/components/SignUp/SignUp.css';
import '../src/components/SignIn/SignIn.css'

function App() {
  return (
    <div>
      <SignIn/> 
      
      <SignUp/>
      <Footer/>
    </div>
  );
}

export default App;
