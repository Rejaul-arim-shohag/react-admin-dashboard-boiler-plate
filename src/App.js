import { Fragment } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";
import CancelPage from "./Pages/CancelPage"
import CompletedPage from "./Pages/CompletedPage";
import NewPage from "./Pages/NewPage";
import ProgressPage from "./Pages/ProgressPage";
import ProfilePage from "./Pages/ProfilePage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import ForgetPassword from "./Pages/ForgetPassword";
import NotFoundPage from "./Pages/NotFoundPage";
import CreatePage from "./Pages/CreatePage";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route exact path="/Create" element={<CreatePage />} />
          <Route exact path="/All" element={<NewPage />} />
          <Route exact path="/Progress" element={<ProgressPage />} />
          <Route exact path="/Completed" element={<CompletedPage />}/>
          <Route exact path="/Canceled" element={<CancelPage />} />
          <Route exact path="/Profile" element={<ProfilePage />}/>
          <Route exact path="/Login" element={<LoginPage />}/>
          <Route exact path="/Registration" element={<RegistrationPage />}/>
          <Route exact path="/Forgetpass" element={<ForgetPassword />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
