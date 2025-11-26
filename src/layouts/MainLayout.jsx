import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { useState } from "react";
import Footer from "../Component/Footer";

export default function MainLayout() {
    const [foodData, setFoodData] = useState([]);
    return (
        <>
            <Navbar setFoodData={setFoodData} />
            <Outlet context={{foodData,setFoodData}}/>
            <Footer />
        </>
    );
}