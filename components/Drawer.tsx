import React from "react";

import { WindowSize } from "@/types";

import {
  AiOutlineClose,
  AiOutlineShareAlt,
  AiOutlineLike,
} from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

interface DrawerProps {
  show: boolean;
  onCloseHandler: () => void;
}

const Drawer = ({ show, onCloseHandler }: DrawerProps): JSX.Element => {
  const [windowSize, setWindowSize] = React.useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = React.useMemo(
    () => ({
      drawer: {
        height: `${windowSize.height - 56}px`,
      },
    }),
    [windowSize.height]
  );

  return (
    <div
      className={`w-[400px] border-l overflow-y-auto px-2 ${
        show ? "me-0 duration-200" : "-me-[400px] duration-200"
      }`}
      style={styles.drawer}
    >
      <div className="h-[56px] p-2 border-b flex items-center justify-end space-x-4">
        <div>
          <FaEye size={21} />
        </div>
        <div>
          <AiOutlineLike size={21} />
        </div>
        <div>
          <AiOutlineShareAlt size={21} />
        </div>
        <div>
          <BsThreeDots size={21} />
        </div>
        <div
          className="cursor-pointer border rounded-md border-white hover:border-gray-200 hover:bg-gray-200 duration-200"
          onClick={onCloseHandler}
        >
          <AiOutlineClose size={21} />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
