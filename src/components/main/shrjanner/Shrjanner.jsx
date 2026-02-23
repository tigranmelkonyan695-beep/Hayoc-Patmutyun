// import React from 'react';
//
// function Shrjanner(props) {
//     return (
//         <div className="w-[20%] h-[90vh] bg-[url(./1.jpg)] border"></div>
//     );
// }
//
// export default Shrjanner;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getArr} from "../../../redux/slices/shrjannerSlice.js";


function Shrjanner() {
    const dispatch = useDispatch();
    const { shrjanners, loading, error } = useSelector(
        (state) => state.shrjanner
    );

    const [activePeriod, setActivePeriod] = useState(null);

    useEffect(() => {
        dispatch(getArr());
    }, [dispatch]);

    useEffect(() => {
        if (shrjanners.length > 0) {
            setActivePeriod(shrjanners[0].id);
        }
    }, [shrjanners]);

    if (loading) {
        return <div className="text-white p-6">Բեռնվում է...</div>;
    }

    if (error) {
        return <div className="text-red-500 p-6">{error}</div>;
    }

    return (
        <div className="w-[20%] h-[90vh] bg-[url(./1.jpg)] bg-cover bg-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <div className="relative z-10 h-full flex flex-col justify-center items-start p-6">
                <h2 className="text-white text-2xl font-bold mb-8">
                    Պատմական Շրջաններ
                </h2>

                <div className="space-y-4 w-full">
                    {shrjanners.map((period) => (
                        <button
                            key={period.id}
                            onClick={() => setActivePeriod(period.id)}
                            className={`w-full text-left p-4 rounded-xl transition-all duration-300
                            ${
                                activePeriod === period.id
                                    ? `${period.color} text-white border-2 border-white`
                                    : "bg-white bg-opacity-20 text-gray-200"
                            }`}
                        >
                            <div className="flex justify-between">
                                <span className="font-semibold text-lg">
                                    {period.label}
                                </span>
                                {activePeriod === period.id && "✓"}
                            </div>

                            {activePeriod === period.id && (
                                <div className="mt-2 text-sm text-gray-100">
                                    {period.description}
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Shrjanner;
