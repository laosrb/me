import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Resume from "./Pages/Resume";
import AboutMe from "./Pages/AboutMe";

const queryClient = new QueryClient();

// Component to handle GitHub Pages SPA routing
function RedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we have a query parameter with a path (from 404.html redirect)
    const queryParams = new URLSearchParams(location.search);
    const path = queryParams.get('/');
    
    if (path) {
      // Decode the path
      const decodedPath = path.replace(/~and~/g, '&');
      const pathParts = decodedPath.split('?');
      const routePath = '/' + pathParts[0];
      
      // Navigate to the correct route without reloading
      navigate(routePath, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router basename="/me">
        <RedirectHandler />
        <Routes>
          <Route path="/" element={<Layout currentPageName="Home"><Home /></Layout>} />
          <Route path="/experience" element={<Layout currentPageName="Experience"><Experience /></Layout>} />
          <Route path="/resume" element={<Layout currentPageName="Resume"><Resume /></Layout>} />
          <Route path="/about-me" element={<Layout currentPageName="AboutMe"><AboutMe /></Layout>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

