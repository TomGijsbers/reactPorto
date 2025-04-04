import AppRoutes from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a theme with both light and dark mode support
const theme = createTheme({
  palette: {
    mode: 'light', // Default to light mode
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;