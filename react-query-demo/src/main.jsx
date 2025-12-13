import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent.jsx"; // <-- import your component
import "./index.css";

// Create a QueryClient instance
const queryClient = new QueryClient();

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  </StrictMode>
);
