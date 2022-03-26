import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <Container fluid>
      <Row>
        <Header/>
      </Row>
      <Row>
        
        <Sidebar/>
      </Row>

      <Row>
        <Footer/>
      </Row>
      
    </Container>
  );
}

export default App;
