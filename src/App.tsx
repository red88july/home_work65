import Toolbar from './component/Toolbar/Toolbar';
import AdminPage from './pages/AdminPage/AdminPage';
import PageNoFoundPicture from '../src/images/404PageNotFound.jpg';
import {Route, Routes} from 'react-router-dom';
import DisplayElement from './component/DisplayElement/DisplayElement';

function App() {
  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main>
        <Routes>
          <Route path="/pages/:pageName"
                 element={(<DisplayElement />)}/>
          <Route path="/pages/admin"
                 element={(<AdminPage/>)}/>
          <Route path="*" element={(
            <div className="container-fluid pic-container">
              <img
                className="pic-notfound"
                src={PageNoFoundPicture}
                alt="Page Not Found"/>
            </div>
          )}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
