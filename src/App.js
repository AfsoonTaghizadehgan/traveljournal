import Navbar from './Components/Navbar.js'
import Trips from './Components/Trip.js'
import './App.css';
import "@fontsource/inter";
import data from './Components/data.js'


function App() {
  const tripItems= data.map( item =>{
    return(
      <Trips 
      key={item.id}
      items= {item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <section className="trips">
        {tripItems}
      </section>
    </div>
  );
}

export default App;
