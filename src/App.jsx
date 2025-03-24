import './App.css'
import { Redirect, Route, Switch } from 'react-router-dom' // `Navigate` yerine `Redirect` kullanıyoruz
import Order from './pages/Order'
import Success from './pages/Success'
import Home from './pages/Home'
import NavController from './components/NavController'

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/order" /> {/* Yönlendirme için Redirect kullanıyoruz */}
        </Route>
        <Route path="/order" component={Order} />
        <Route path="/home" component={Home} />
        <Route path="/success" component={Success} />
      </Switch>
      <NavController />
    </>
  )
}

export default App
