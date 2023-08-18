import Toggle from './components/Toggle'
import Footer from './components/Footer'
import './App.scss'

export default function App() {
  return (
    <>
      <h1 className="title-app">Word<span>Up</span></h1>
      <Toggle />
      <Footer />
    </>
  )
}