import { Route, Routes } from "react-router-dom";
import { Callback } from "./Callback";
import { Promise } from "./Promise";
import { Async } from "./Async";
import { Home } from "./Home";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/callback" element={<Callback/>}/>
      <Route path="/promise" element={<Promise/>}/>
      <Route path="/async" element={<Async/>}/>
    </Routes>
    </>
  );
}

export default App;
