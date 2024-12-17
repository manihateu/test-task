import Filters from "./Filters"
import Tickets from "./Tickets"
import "./input.css"
import tickets from './assets/tickets.json'
import { useEffect, useState } from "react"

const exchangeRates = {
  "RUB": 1,        
  "USD": 0.013,    
  "EUR": 0.011,    
};

const App = () => {
  const [selectedTransfer, setSelectedTransfer] = useState([]);
  const [selectedValute, setSelectedValute] = useState("RUB"); 
  const [filteredTickets, setFilteredTickets] = useState(tickets.tickets)
  useEffect(() => {
    if (selectedTransfer.length === 0) {
      setFilteredTickets(tickets.tickets);
  } else if (selectedTransfer.includes('all')) {
      setFilteredTickets(tickets.tickets);
  } else {
      setFilteredTickets(tickets.tickets.filter(ticket => {
          return selectedTransfer.includes(ticket.stops.toString());
      }));
  }
  }, [selectedTransfer])

  useEffect(() => {
      let filtered = []
      if (filteredTickets.length != 0) {
        if (selectedValute) {
          filtered = tickets.tickets.map(ticket => {
            const convertedPrice = ticket.price * exchangeRates[selectedValute];
            return { ...ticket, price: convertedPrice }; 
          });
        } else {
          filtered = tickets.tickets
        }
        
        if (selectedTransfer.length !== 0 && !selectedTransfer.includes('all')) {
          filtered = filtered.filter(ticket => {
            return selectedTransfer.includes(ticket.stops.toString());
          });
        }
        setFilteredTickets(filtered)
      } else {
        setFilteredTickets(tickets.tickets)
      }
  }, [selectedValute])
  return (
    <div className="h-screen w-screen flex py-[16px] justify-center gap-x-5 overflow-x-hidden">
      <Filters 
          selectedFilterЕransfer={selectedTransfer} 
          setSelectedFilterЕransfer={setSelectedTransfer} 
          selectedValute={selectedValute} 
          setSelectedValute={setSelectedValute} 
      />
      <Tickets selectedValute={selectedValute} ticketsData={filteredTickets} />
    </div>
  );
}
export default App;