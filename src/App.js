import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/chat/Navbar";
import AppRouter from "./components/chat/AppRouter";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "./components/chat/Loader";
import { Context } from ".";

function App() {
    const { auth } = useContext(Context);
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loader />;
    }

    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
