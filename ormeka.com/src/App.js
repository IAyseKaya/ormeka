import "./App.css";
import MainPage from "./MainPage/main-page.jsx";
import About from "./components/about";
import Contact from "./components/contact";
import Login from "./components/login";
import Banner from "./components/banner"
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer";
import ProjectsPage from "./ProjectsPage/ProjectsPage.jsx";
import ProjectPage from "./ProjectPage/ProjectPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GroupCompany from "./components/GroupCompany.jsx";
import FotoGaleri from "./components/fotoGaleri.jsx";

function App() {
  

  return (
    <div
      id="body"
      className=" text-black bg-stone-100"
    >
      <BrowserRouter>
      <Banner/>
        <Navbar />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="login" element={<Login />} />
          <Route path="grupsirketleri" element={<GroupCompany/>} />
          <Route path="kurumsal" element={<About />} />
          <Route path="iletisim" element={<Contact />} />
          <Route path="galeri" element={<FotoGaleri />} />
          <Route path="projeler" exact element={<ProjectsPage />} />  
          <Route path="proje/:link" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
