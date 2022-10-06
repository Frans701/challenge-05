import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Navbar from "./components/Navbar";
import SearchPage from "./routes/SearchPage";
import Homepage from "./routes/Homepage";
import Page404 from "./routes/Page404";
import Soon from "./routes/Soon";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Homepage />} />
            <Route path="detail/:detailId" element={<Detail />} />
            <Route path="searchPage" element={<SearchPage />} />
            <Route path="soon" element={<Soon />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
