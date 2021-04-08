import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Route, Switch } from 'react-router-dom';
import { HashRouter as RouterProvider } from 'react-router-dom'
import { AppFooter } from './components/AppFooter/AppFooter';


const App = () => {
  return (
    <div className="app main-grid">
      <RouterProvider>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <AppFooter />
      </RouterProvider>
    </div>
  );
}

export default App;
