"use client";

import { useState } from "react";

export interface AccordionItem {
  year: string;
  title: string;
  description: string;
}

interface AccordionProps {
  items: AccordionItem[];
  title: string;
  subtitle: string;
  className?: string;
}

export default function Accordion({
  items,
  title,
  subtitle,
  className = "",
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className={`py-20 bg-black text-white ${className}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-normal mb-8 font-baskervville max-w-2xl">
          {title}
        </h2>
        <p className="text-lg mb-12 max-w-2xl">{subtitle}</p>

        <div className="">
          {items.map((item, index) => (
            <div key={index} className="border-b border-gray-800">
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left py-6 flex items-center justify-between hover:bg-gray-900 transition-colors duration-200 px-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl font-normal text-gray-300 min-w-[80px]">
                    {item.year}
                  </div>
                  <div className="text-lg font-baskervville">{item.title}</div>
                </div>
                <div className="text-gray-400 text-2xl transition-transform duration-200">
                  {openItems.includes(index) ? "−" : "+"}
                </div>
              </button>

              {openItems.includes(index) && (
                <div className="py-6 px-4">
                  <div className="text-gray-400 leading-relaxed whitespace-pre-line">
                    {item.description}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
