import { useEffect } from 'react';
import AppRoutes from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from "./component/Footer";

// Create a theme with both light and dark mode support
const theme = createTheme({
  palette: {
    mode: 'light', // Default to light mode
  },
});

function App() {
  useEffect(() => {
    // Add Google Analytics
    // Create script for gtag.js
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-JL7N7BJT5T';
    document.head.appendChild(gtagScript);

    // Create script for gtag configuration
    const dataLayerScript = document.createElement('script');
    dataLayerScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-JL7N7BJT5T');
    `;
    document.head.appendChild(dataLayerScript);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      document.head.removeChild(gtagScript);
      document.head.removeChild(dataLayerScript);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  );
}

export default App;