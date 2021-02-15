import './App.css';
import Header from './components/Header';
import Page from './components/Page';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div class="container">
        <Sidebar />
        <Page />
      </div>
      <Footer />
    </>
  );
}

export default App;
