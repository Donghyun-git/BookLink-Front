import './App.css';
import '../public/css/default.css';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Router from './routes/Router';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
