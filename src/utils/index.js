export function createPageUrl(pageName) {
  const pageMap = {
    Home: "/",
    Experience: "/experience",
    Resume: "/resume",
    AboutMe: "/about-me",
  };
  return pageMap[pageName] || "/";
}

// Note: The basename "/me" is handled by BrowserRouter in App.jsx
// So these paths will automatically be prefixed with /me/ when used

