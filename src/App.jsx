import './App.css'
import Searchbar from './components/Searchbar/index.jsx'
import Pokemon from './components/Pokemon/index.jsx'


function App() {

  return (
    <div className="App">
        <h1>Poke-FETCH</h1>
        <em>Search your favourite Pokemon here</em>
        <section className='search'>
          <Searchbar />
          <Pokemon />
        </section>
    </div>
  )
}

export default App
