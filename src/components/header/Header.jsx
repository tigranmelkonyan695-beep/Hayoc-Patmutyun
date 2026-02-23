import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Header(props) {
    return (
        <div className="w-full h-[70px]  bg-[url(./1.jpg)] flex justify-start p-3 ">
            <div className="w-[60%] h-full flex items-center">
                <h1 className="text-4xl font-extrabold text-white drop-shadow-lg tracking-wide">
                    ՀԱՅՈՑ ՊԱՏՄՈՒԹՅՈՒՆ
                </h1>
            </div>

            <div className="w-[40%] h-full  flex  justify-end ">
                <input type="text" placeholder="Որոնում " className="w-[50%] p-[6px] h-[40px] rounded-xl bg-[#E8EAEB]" />
            <div className="w-[40px] h-[40px]  flex justify-center items-center rounded-[50%] relative right-[40px] bg-amber-300 " ><SearchIcon/></div>
            </div>



        </div>
    );
}

export default Header;