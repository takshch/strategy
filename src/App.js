import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LogsRoute from './routes/Logs';
import MainRoute from './routes/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRoute />}></Route>
        <Route path="/logs" element={<LogsRoute />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
