import "./Seat.css"

const Seat = ({sitz}) => {
   
    const reservation = (e) => {
       e.target.className="occupied"
        fetch("http://localhost:9999/api/v1/cinema", 
        {method: "PUT",
        headers: {"content-type":"application/json"},
        body:JSON.stringify({id:sitz.id})
    } )
    .then(res => res.json())
    }

    return (  
       
    
       <div onClick={reservation} className={sitz.status?"occupied":sitz.klasse}> 
        
        </div>


    );
}
 
export default Seat;

// 
/* 
entspricht der If else Aussage.
{ if (sitz.status - bedeutet, dass status auf true ist, dann
    dann gebe den string occupied zurück ..
    else :sitz.klasse = "loge" - bedeutet gibt die jeweilige klasse aus.
*/