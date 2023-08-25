import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        {/* <Menu/> */}
        <Routes>
          {/* <Route path='/auth/log' element={<Log/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
