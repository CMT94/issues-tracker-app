import React from "react";
import {
  AiOutlineClose,
  AiOutlineLike,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

interface DrawerHeaderProps {
  onCloseHandler: () => void;
}

const DrawerHeader = ({ onCloseHandler }: DrawerHeaderProps) => {
  return (
    <div className="h-[56px] p-2 border-b flex items-center justify-end space-x-4">
      <div className="cursor-pointer text-gray-600 border rounded-md border-white hover:border-gray-100 hover:bg-gray-100 duration-200">
        <FaEye size={18} />
      </div>
      <div className="cursor-pointer text-gray-600 border rounded-md border-white hover:border-gray-100 hover:bg-gray-100 duration-200">
        <AiOutlineLike size={18} />
      </div>
      <div className="cursor-pointer text-gray-600 border rounded-md border-white hover:border-gray-100 hover:bg-gray-100 duration-200">
        <AiOutlineShareAlt size={18} />
      </div>
      <div className="cursor-pointer text-gray-600 border rounded-md border-white hover:border-gray-100 hover:bg-gray-100 duration-200">
        <BsThreeDots size={18} />
      </div>
      <div
        className="cursor-pointer text-gray-600 border rounded-md border-white hover:border-gray-100 hover:bg-gray-100 duration-200"
        onClick={onCloseHandler}
      >
        <AiOutlineClose size={18} />
      </div>
    </div>
  );
};

export default DrawerHeader;
