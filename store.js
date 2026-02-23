    // import {configureStore} from "@reduxjs/toolkit";
    // import ShrjanerReducer from "./src/redux/slices/shrjannerSlice.js"
    // const store = configureStore({
    //     reducer: {
    //      ShrjanerReducer
    //     }
    // });
    // export default store;

    import { configureStore } from "@reduxjs/toolkit";
    import shrjannerReducer from "./src/redux/slices/shrjannerSlice";
    import MainDivReducer from "./src/redux/slices/mainDivSlice";


    const store = configureStore({
        reducer: {
            shrjanner: shrjannerReducer, // 👈 ԱՆՈՒՆԸ ՊԱՐՏԱԴԻՐ
            mainDiv: MainDivReducer,
        },
    });

    export default store;
