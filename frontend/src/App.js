import { Route, Routes} from "react-router-dom";

import About from "./Pages/About";
import Body from "./Pages/Body";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import StudentLanding from "./Pages/StudentLanding";
import Chatbot from "./Components/Chatbot";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body></Body>}></Route>
        <Route path="/about" element= {<About></About>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}>  </Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/chatbot" element= {<Chatbot></Chatbot>}></Route>
        <Route path="/studentpage" element={<StudentLanding></StudentLanding>}></Route>
      </Routes>
    </div>
  )
}