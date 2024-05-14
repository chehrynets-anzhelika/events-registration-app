import { Routes, Route } from "react-router-dom";
import BoardPage from "./pages/BoardPage";
import RegistrationPage from "./pages/RegistrationPage";
import ParticipantsPage from "./pages/ParticipantsPage";
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<BoardPage />}/>
        <Route path="registration" element={<RegistrationPage />}/>
        <Route path="participants" element={<ParticipantsPage />}/>
      </Route>
      </Routes>
    </>
  );
}

export default App;
