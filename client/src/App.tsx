import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn"


function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default App
