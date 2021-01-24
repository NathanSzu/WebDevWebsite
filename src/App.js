import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route exact path='/pricing' component={Pricing} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/contact' component={Contact} />
    </Router>
  );
}

export default App;
