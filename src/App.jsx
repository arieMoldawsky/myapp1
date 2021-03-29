import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { AppHeader } from './components/AppHeader/AppHeader';
import { Route, Switch } from 'react-router-dom';
import { HashRouter as RouterProvider } from 'react-router-dom'


const App = () => {
  return (
    <div className="app main-grid">
      <RouterProvider>
        <AppHeader />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </RouterProvider>
    </div>
  );
}

export default App;
