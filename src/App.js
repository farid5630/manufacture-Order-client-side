import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Header></Header>}></Route>
      </Routes>
    </div>
  );
}

export default App;
