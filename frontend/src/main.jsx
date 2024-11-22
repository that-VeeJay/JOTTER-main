import { NextUIProvider } from "@nextui-org/react";
import { createRoot } from "react-dom/client";
import AppProvider from "./Context/AppContext.jsx";
import { PostsProvider } from "./Context/PostsProvider.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <NextUIProvider>
        <AppProvider>
            <PostsProvider>
                <App />
            </PostsProvider>
        </AppProvider>
    </NextUIProvider>
);
