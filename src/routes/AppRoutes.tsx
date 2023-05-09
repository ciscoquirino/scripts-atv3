import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import { Timemania } from "../pages/Timemania";
import Menu from "../components/Menu";
import { Megasena } from "../pages/Megasena";
import { Quina } from "../pages/Quina";


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/megasena" element={<Megasena />} />
                <Route path="/timemania" element={<Timemania />} />
                <Route path="/quina" element={<Quina />} />
            </Routes>
        </BrowserRouter>
    )
}