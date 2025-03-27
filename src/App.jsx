import './App.css'
import { Redirect, Route, Switch } from 'react-router-dom' // `Navigate` yerine `Redirect` kullanıyoruz
import Order from './pages/Order'
import Success from './pages/Success'
import Home from './pages/Home'
import NavController from './components/NavController'
import anaSayfa from './pages2/anaSayfa'
import homes from './pages2/homes.'

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/anaSayfa" /> {/* Yönlendirme için Redirect kullanıyoruz */}
        </Route>
        <Route path="/anaSayfa" component={anaSayfa} />
        <Route path="/homes" component={homes} />
      </Switch>
      <NavController />
    </>
  )
}

export default App
