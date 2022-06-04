import './App.css';
import Content from './components/Layout/Content';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import MainContainer from './components/Layout/MainContainer';

function App(props) {
  return (
    <div className="App">
      <MainContainer>
        <Header />
        <Content />
        <Footer />
      </MainContainer>
      {/* <header className="App-header">
        <h1>Olá mundo!</h1>
      </header> */}
    </div>
  );
}

export default App;
