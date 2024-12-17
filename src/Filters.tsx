import { useState } from "react";
import Accordion from "./Accordion";
import Arrow from './assets/Arrow.svg';
import { motion } from "framer-motion";
const Filters = ({ selectedFilterЕransfer, setSelectedFilterЕransfer, selectedValute, setSelectedValute }) => {
    const [expanded, setExpanded] = useState(false);
    const handleTransferSelectChange = (value) => {
        setSelectedFilterЕransfer((prev) => {
            if (prev.includes(value)) {
                return prev.filter(item => item !== value); 
            } else {
                return [...prev, value]; 
            }
        });
    };
    return (
        <motion.div className="rounded-[44px] bg-[#EBF0FF] p-5" animate={{ height: expanded ? 330 : 170 }}>
            <p className="text-[24px]">Валюта</p>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500">
                <li className="me-2">
                    <a 
                        href="#" 
                        onClick={() => selectedValute == "RUB" ? setSelectedValute("") : setSelectedValute("RUB")} 
                        className={`inline-block px-4 py-3 rounded-xl ${selectedValute == "RUB" ? "text-white bg-blue-600" : "hover:text-gray-900 hover:bg-gray-100"}`}
                    >
                        RUB
                    </a>
                </li>
                <li className="me-2">
                    <a 
                        href="#" 
                        onClick={() => selectedValute == "USD" ? setSelectedValute("") : setSelectedValute("USD")} 
                        className={`inline-block px-4 py-3 rounded-xl ${selectedValute=="USD" ? "text-white bg-blue-600" : "hover:text-gray-900 hover:bg-gray-100"}`}
                    >
                        USD
                    </a>
                </li>
                <li className="me-2">
                    <a 
                        href="#" 
                        onClick={() => selectedValute == "EUR" ? setSelectedValute("") : setSelectedValute("EUR")} 
                        className={`inline-block px-4 py-3 rounded-xl ${selectedValute == "EUR" ? "text-white bg-blue-600" : "hover:text-gray-900 hover:bg-gray-100"}`}
                    >
                        EUR
                    </a>
                </li>
            </ul>
            <p onClick={() => { setExpanded((prev) => !prev) }} className="text-[24px] cursor-pointer flex justify-between items-center gap-x-4">
                Количество пересадок
                <motion.img animate={{ transform: expanded ? "rotate(180deg)" : null }} src={Arrow} className="w-[12px] h-[12px]" />
            </p>
            <Accordion 
                expanded={expanded} 
                setExpanded={setExpanded} 
                selected={selectedFilterЕransfer} 
                setSelected={handleTransferSelectChange} 
            />
        </motion.div>
    );
}
export default Filters;