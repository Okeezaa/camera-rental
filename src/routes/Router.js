import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Invoice from "../pages/Invoice";
import LiveStock from "../pages/LiveStock";
import Pembelian from "../pages/Pembelian";
import Settings from "../pages/Settings";

const router = () => {
    return <BrowserRouter>
    <Routes>

        <Route path="/" element={<Navigate to='dashboard' element= {Dashboard} />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/invoice" element={<Invoice/>} />
        <Route path="/livestock" element={<LiveStock/>} />
        <Route path="/pembelian" element={<Pembelian/>} />
        <Route path="/settings" element={<Settings/>} />
    </Routes>
    </BrowserRouter>
};

export default router;
