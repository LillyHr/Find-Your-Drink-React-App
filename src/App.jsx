import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import NotFound from './components/not-found/NotFound'
import CreateADrink from './components/create-a-drink/CreateADrink'
import Registration from './components/registation/Registration'
import LogIn from './components/log-in/Login'
import Search from './components/search/Search'
import Profile from './components/profile/Profile'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/create-a-drink' element={<CreateADrink/>}/>
        <Route path='/register' element={<Registration/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
