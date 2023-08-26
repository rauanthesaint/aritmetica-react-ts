import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import styles from './App.module.scss';
import { Sidebar } from './components/static-components/static-components';
const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path='/auth/log' element={<div>Log</div>}/>
          <Route path='/' element={<div>Home</div>}/>
          <Route path='/calculator/engineer' element={<div>Engineer Calculator</div>}/>
          <Route path='/calculator/graphic' element={<div>Graphic Calc</div>}/>
          <Route path='/calculator/matrix' element={<div>Matrix Calc</div>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
