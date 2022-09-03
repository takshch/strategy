import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainRoute from './routes/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRoute />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
