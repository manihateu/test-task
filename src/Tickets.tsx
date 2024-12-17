import plane from './assets/icon.svg'

const Tickets = ({ticketsData, selectedValute}) => {
    return (
        <div className="flex flex-col gap-y-[40px] max-h-screen overflow-auto">
            {ticketsData.map((ticket) => 
                <div className="bg-[#EBF0FF] p-[40px] rounded-[44px]">
                    <div className="flex gap-x-[80px] justify-between items-center">
                        <div className="flex flex-col gap-x-[18px]">
                            <p className='font-bold text-[24px]'>{ticket.origin_name} <span className='opacity-[0.5]'>[{ticket.origin}]</span></p>
                            <p className='text-[#1E7EFE] text-[72px] font-bold'>{ticket.departure_time}</p>
                            <p className='text-[24px]'>{ticket.departure_date}</p>
                        </div>
                        <div className="flex flex-col gap-x-[18px]">
                            <img src={plane} className='w-[56px] h-[56px]'/>
                        </div>
                        <div className="flex flex-col gap-x-[18px]">
                            <p className='font-bold text-[24px]'>{ticket.destination_name} <span className='opacity-[0.5]'>[{ticket.destination}]</span></p>
                            <p className='text-[#1E7EFE] text-[72px] font-bold'>{ticket.arrival_time}</p>
                            <p className='text-[24px]'>{ticket.arrival_date}</p>
                        </div>
                    </div>
                    <div className="h-[0.5px] bg-[#727272] w-full my-3 "></div>
                    <div className="flex justify-between items-center">
                        <p className='font-bold text-[24px]'>{selectedValute ? selectedValute : "UAH"} {ticket.price}</p>
                        <button className='bg-[#1E7EFE] rounded-xl text-white font-bold px-[16px] py-[24px]'>Купить</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Tickets;