import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import NotFound from './components/not-found/NotFound'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
