import Seat from "../components/Seat.jsx"
import {useState, useEffect} from "react"



const Home  = () => {
const [seats, setSeats] = useState([])
// sesrs - das array vom data.json - backend - natürlich nachen dem fetch

useEffect(() => {
    fetch("http://localhost:9999/api/v1/cinema")
    .then(res => res.json())
    .then (data =>setSeats(data))
}, [])
console.log(seats)
    return ( 
        <>
       
        <h1>Home</h1>
       { seats && seats.map((seat, index) => {
            return <Seat   key ={index} sitz={seat} />
        })}
        </>
     );
}
 
export default Home;