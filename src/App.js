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
import { Harvest2011, Harvest2012, Harvest2013, Harvest2014, Harvest2015, Harvest2016, Harvest2017, Harvest2018, Harvest2019, Harvest2020, Harvest2021, Harvest2022 } from './assets/utils/harvestGraphs'


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
          <Route path="data" element={<Data />}>
            <Route index element={<Harvest2021/>}></Route>
            <Route path="2011" element={<Harvest2011/>}></Route>
            <Route path="2012" element={<Harvest2012/>}></Route>
            <Route path="2013" element={<Harvest2013/>}></Route>
            <Route path="2014" element={<Harvest2014/>}></Route>
            <Route path="2015" element={<Harvest2015/>}></Route>
            <Route path="2016" element={<Harvest2016/>}></Route>
            <Route path="2017" element={<Harvest2017/>}></Route>
            <Route path="2018" element={<Harvest2018/>}></Route>
            <Route path="2019" element={<Harvest2019/>}></Route>
            <Route path="2020" element={<Harvest2020/>}></Route>
            <Route path="2021" element={<Harvest2021/>}></Route>
          </Route>
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
