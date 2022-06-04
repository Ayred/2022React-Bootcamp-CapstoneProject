import './App.css';
import Content from './components/Layout/Content';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import MainContainer from './components/Layout/MainContainer';

function App(props) {
  return (
    <MainContainer>
      <Header />
      <Content />
      <Footer />
    </MainContainer>
  );
}

export default App;
