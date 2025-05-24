"use client"
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BarChart = ({ barData }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div ref={ref} className="barChart flex justify-between bg-white items-end">
            {barData.map((item, index) => (
                <div key={index} className="bar-inner flex flex-col items-center">
                    <div className="inner-top">
                        <p className="mt-2 font-bold">{item.value}%</p>
                        <p className="text-gray-600 text-sm">/ 100%</p>
                    </div>
                    <motion.div
                        initial={{ height: "0%" }}
                        animate={{ height: inView ? `${item.height}px` : "0%" }}
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        className="w-40 bg-yellow-400"
                        style={{ minHeight: "0" }} // Ensure visibility for small values
                    />
                    <p className="mt-2 text-center text-sm text-gray-800">{item.label}</p>
                </div>
            ))}
        </div>
    );
};

export default BarChart;
