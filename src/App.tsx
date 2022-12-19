import './App.css';
import { ThemeProvider } from 'styled-components';
import Wrapper from './components/Wrapper/Wrapper';
// import AddBandForm from './modules/dashboard/Band/AddBandForm';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

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
        <RouterProvider router={ router } />
        {/* <AddBandForm /> */}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
