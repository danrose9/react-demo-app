import './App.css';
import Header from './components/Header';
import Routes from './components/Routes';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div class="container">
        <Sidebar />
        <Routes />
      </div>
      <Footer />
    </>
  );
}

export default App;
