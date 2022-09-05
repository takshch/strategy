import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogsRoute from './routes/Logs';
import MainRoute from './routes/Main';
import SettingsRoute from './routes/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRoute />}></Route>
        <Route path="/logs" element={<LogsRoute />}></Route>
        <Route path="/settings" element={<SettingsRoute />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
