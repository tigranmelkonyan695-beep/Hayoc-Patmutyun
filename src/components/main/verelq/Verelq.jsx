// import React from 'react';
//
// function Verelq(props) {
//     return (
//         <div className="w-[80%] h-[90vh] border ">
//             <div className="w-full h-[80%] border  bg-[url(./2.jpg)]  bg-center bg-no-repeat"></div>
//             <div className="w-full h-[20%] border">
//
//             </div>
//         </div>
//
//     );
// }
//
// export default Verelq;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { getArr1 } from "/src/redux/slices/mainDivSlice.js"; // ճանապարհը հարմարեցրու
//
// function Verelq() {
//     const dispatch = useDispatch();
//     const { mainDivs, loading } = useSelector(state => state.mainDiv);
//
//     useEffect(() => {
//         dispatch(getArr1());
//     }, [dispatch]);
//
//     return (
//         <div className="w-[80%] h-[90vh] border">
//
//             {/* ՎԵՐԻՆ ՄԵԾ ՆԿԱՐ */}
//             <div className="w-full h-[80%] border bg-[url(/2.jpg)] bg-center bg-no-repeat bg-cover"></div>
//
//             {/* ՆԵՐՔԵՎԻ DIV — title + img */}
//             <div className="w-full h-[20%] border flex items-center justify-around">
//                 {loading && <p>Loading...</p>}
//
//                 {mainDivs.map(item => (
//                     <div key={item.id} className="flex items-center gap-2">
//                         {item.img && (
//                             <img
//                                 src={item.img}
//                                 alt={item.title}
//                                 className="w-12 h-12 object-cover"
//                             />
//                         )}
//                         <p className="font-semibold">{item.title}</p>
//                     </div>
//                 ))}
//             </div>
//
//         </div>
//     );
// }
//
// export default Verelq;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { getArr1 } from "/src/redux/slices/mainDivSlice.js"; // ճանապարհը հարմարեցրու
//
// function Verelq() {
//     const dispatch = useDispatch();
//     const { mainDivs, loading } = useSelector(state => state.mainDiv);
//
//     useEffect(() => {
//         dispatch(getArr1());
//     }, [dispatch]);
//
//     return (
//         <div className="w-[80%] h-[90vh] border">
//
//             {/* ՎԵՐԻՆ ՄԵԾ ՆԿԱՐ */}
//             <div className="w-full h-[80%] border bg-[url(/2.jpg)] bg-center bg-no-repeat bg-cover"></div>
//
//             {/* ՆԵՐՔԵՎԻ DIV — title + img */}
//             <div className="w-full h-[20%] border flex items-center justify-around">
//                 {loading && <p>Loading...</p>}
//
//                 {mainDivs.map(item => (
//                     <div
//                         key={item.id}
//                         className="flex items-center gap-2 p-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-gray-100 rounded-md cursor-pointer"
//                     >
//                         {item.img && (
//                             <img
//                                 src={item.img}
//                                 alt={item.title}
//                                 className="w-12 h-12 object-cover rounded-full"
//                             />
//                         )}
//                         <p className="font-semibold">{item.title}</p>
//                     </div>
//                 ))}
//             </div>
//
//         </div>
//     );
// }
//
// export default Verelq;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArr1 } from "/src/redux/slices/mainDivSlice.js";
import { useNavigate } from "react-router-dom";

function Verelq() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { mainDivs, loading } = useSelector((state) => state.mainDiv);

    useEffect(() => {
        dispatch(getArr1());
    }, [dispatch]);

    // map id → route
    const routeMap = {
        "1": "/maps",
        "2": "/kings",
        "3": "/gallery",
    };

    return (
        <div className="w-[80%] h-[90vh] border mx-auto">

            {/* ՎԵՐԻՆ ՄԵԾ ՆԿԱՐ */}
            <div className="w-full h-[80%] bg-[url(/2.jpg)] bg-center bg-cover"></div>

            {/* ՆԵՐՔԵՎԻ DIV */}
            <div className="w-full h-[20%] flex items-center justify-around mt-4">
                {loading && <p>Loading...</p>}

                {mainDivs.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => navigate(routeMap[item.id])} // այստեղ անցնում ենք նոր էջ
                        className="flex items-center gap-2 p-2 cursor-pointer hover:scale-105 hover:shadow-lg hover:bg-gray-100 transition-transform rounded-md"
                    >
                        {item.img && (
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-12 h-12 object-cover rounded-full"
                            />
                        )}
                        <p className="font-semibold">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Verelq;
