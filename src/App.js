import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Components from './pages/Components';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/components" component={Components} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
