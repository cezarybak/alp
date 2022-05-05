import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from './globals';
import { AppRoutes } from './routing';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
