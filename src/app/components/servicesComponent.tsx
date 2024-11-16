"use client";
import { data } from "../../../utils/data";
import Accordion from "./accordion";
import { useState } from "react";

export default function ServicesComponent() {
    const sections = [
        { title: "Haircuts & Styles", items: data.services },
        { title: "Hair Color", items: data.cc },
        { title: "Make up & Waxing", items: data.waxs },
        { title: "Keratin Treatment", items: data.treatments },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-slate-50 px-3 pt-4 ">
            <ul className="space-y-4">
                {sections.map((section, index) => (
                    <li key={index} className="space-y-2">
                        <span className="text-4xl text-black font-bold">{section.title}</span>
                        <div className="bg-black bg-opacity-35 p-1 rounded-lg shadow-md text-white">
                            <Accordion
                                items={section.items}
                                isOpen={openIndex === index}
                                onToggle={() => toggleAccordion(index)}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

