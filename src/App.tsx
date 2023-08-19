import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Menu from './components/menu/menu-static-component';
import EngineerCalc from './pages/engineer-calc-page/ts_page-engineer-calc';

const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<EngineerCalc/>}/>
          <Route path='/profile' element={<EngineerCalc/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
