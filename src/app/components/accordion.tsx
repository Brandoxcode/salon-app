'use client'
import { useState } from "react";


export default function Accordion({ items }: any) {
    const [isExpanded, setIsExpanded] = useState(false);


    const visibleItems = isExpanded ? items : items.slice(0, 4);

    return (
        <div>

            {visibleItems.map((item: any, index: number) => (
                <div key={index} className="border-b border-gray-300 py-3">
                    <span className="text-white font-semibold">{item.name}</span>
                    <span className="text-white font-semibold px-3">{item.price}</span>
                </div>
            ))}
            {items.length > 4 && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="py-2 mt-3 text-black hover:underline"
                >
                    {isExpanded ? "Show less" : "Show All"}
                </button>
            )}
        </div>
    );
}

