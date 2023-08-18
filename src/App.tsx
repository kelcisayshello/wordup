import Toolbar from './components/Toolbar'
import Footer from './components/Footer'
import TextBox from './components/TextBox'
import './App.scss'

export default function App() {
  return (
    <>
      <h1 className="title-app">Word<span>Up</span></h1>

      <Toolbar />
      <TextBox />
      <Footer />
    </>
  )
}