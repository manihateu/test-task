import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
const Accordion = ({ expanded, setExpanded, selected, setSelected }) => {
    const options = [
        { label: "Все", value: "all" },
        { label: "Без пересадок", value: "0" },
        { label: "1 пересадка", value: "1" },
        { label: "2 пересадки", value: "2" },
        { label: "3 пересадки", value: "3" },
    ];
    return (
        <>
            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.section>
                        <div className="flex flex-col gap-y-3">
                            {options.map(option => (
                                <div key={option.value} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={selected.includes(option.value)}
                                        onChange={() => setSelected(option.value)}
                                        className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded-xl"
                                    />
                                    <label className="ms-2 text-sm font-medium text-gray-900">{option.label}</label>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
};
export default Accordion;