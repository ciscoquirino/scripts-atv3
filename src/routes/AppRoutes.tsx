import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Mega } from "../pages/Mega";
import { Quina } from "../pages/Quina";
import { Facil } from "../pages/Facil";
import { Home } from "../pages/Home";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/megasena" element={<Mega />} />
                <Route path="/quina" element={<Quina />} />
                <Route path="/lotofacil" element={<Facil />} />
            </Routes>
        </BrowserRouter>
    )
}