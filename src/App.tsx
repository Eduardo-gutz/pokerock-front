import './App.css';
import { ThemeProvider } from 'styled-components';
import Wrapper from './components/Wrapper/Wrapper';
import AddBandForm from './modules/AddBandForm';

const theme = {
  white: '#ECECEF',
  dark: '#0A0A0B',
  gray: '#6B6B71',
  red: '#D80404',
  redLight: '#F2A9A9',
  rounded: '.24rem'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <AddBandForm />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
