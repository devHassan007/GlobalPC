import { useCallback, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollManager from "./components/ScrollManager";
import Splash from "./components/Splash";
import Home from "./pages/Home";
import SouthKorea from "./pages/SouthKorea";
import UnitedKingdom from "./pages/UnitedKingdom";
import UnitedStates from "./pages/UnitedStates";
import Canada from "./pages/Canada";
import Australia from "./pages/Australia";
import NewZealand from "./pages/NewZealand";
import Europe from "./pages/Europe";
import Austria from "./pages/Austria";
import "./App.css";

// To add a destination: create src/pages/<Name>.js, add a route below, and add it to `destinations` in src/data/siteData.js.
export default function App() {
    // The logo screen shows on every full page load.
    const [splashDone, setSplashDone] = useState(false);
    const finishSplash = useCallback(() => setSplashDone(true), []);
    return <BrowserRouter>
        {!splashDone && <Splash onDone={finishSplash} />}
        <ScrollManager />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations/south-korea" element={<SouthKorea />} />
            <Route path="/destinations/united-kingdom" element={<UnitedKingdom />} />
            <Route path="/destinations/united-states" element={<UnitedStates />} />
            <Route path="/destinations/canada" element={<Canada />} />
            <Route path="/destinations/australia" element={<Australia />} />
            <Route path="/destinations/new-zealand" element={<NewZealand />} />
            <Route path="/destinations/europe" element={<Europe />} />
            <Route path="/destinations/austria" element={<Austria />} />
            <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>;
}