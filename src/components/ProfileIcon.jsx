import { TbGridDots } from "react-icons/tb";
import { GoSearch } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { SlTag } from "react-icons/sl";


const ProfileIcon = () => {
    return (
        <div className="flex gap-2">
             <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
                <SlTag size={20} color="#5f6368" />
            </span>
            <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
                <TbGridDots size={20} color="#5f6368" />
            </span>
           
            <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
                <BsImage size={20} color="#5f6368" />
            </span>
            <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
                <BiNews size={20} color="#5f6368" />
            </span>
            <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
                <RiVideoLine size={20} color="#5f6368" />
            </span>
            
        </div>
    );
};

export default ProfileIcon;
