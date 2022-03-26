import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Volunteer from "./pages/Volunteer";
import Donate from "./pages/Donate";
import Data from "./pages/Data";
import Tools from "./pages/Tools";

function App() {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row className='d-flex flex-row'>
 
        <Sidebar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="volunteer" element={<Volunteer />}></Route>
          <Route path="donate" element={<Donate />}></Route>
          <Route path="data" element={<Data />}></Route>
          <Route path="tools" element={<Tools />}></Route>
        </Routes>
      </Row>

      <Row>
        <Footer />
      </Row>

    </Container>
  );
}

export default App;
