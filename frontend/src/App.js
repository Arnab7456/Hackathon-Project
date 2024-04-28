import { Route, Routes} from "react-router-dom";

import About from "./Pages/About";
import Body from "./Pages/Body";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body></Body>}></Route>
        <Route path="/about" element= {<About></About>}></Route>
      </Routes>
    </div>
  )
}