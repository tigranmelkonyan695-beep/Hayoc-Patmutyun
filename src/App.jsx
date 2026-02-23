
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";

import Maps from "./components/main/pages/Map.jsx";
import Kings from "./components/main/pages/King.jsx";
import Gallery from "./components/main/pages/Galery.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/maps" element={<Maps />} />
                <Route path="/kings" element={<Kings />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

