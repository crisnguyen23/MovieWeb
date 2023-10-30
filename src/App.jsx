import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Footer, Header, Home, MovieDetail, PageNotFound } from "./components";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <div className="my-0 mx-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
