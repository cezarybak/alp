import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routing';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
