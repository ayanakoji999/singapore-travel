import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Tours from './components/Tours'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Register from './pages/Register'
import TourDetails from './pages/TourDetails'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Tours />
              <Contacts />
              <Footer />
            </>
          }
        />
        <Route path="/tours" element={<Register />} />
        <Route path="/details/:id" element={<TourDetails />} />
      </Routes>
    </>
  )
}

export default App
