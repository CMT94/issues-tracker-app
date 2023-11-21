import React from "react";

import { WindowSize } from "@/types";

import DrawerHeader from "./Drawer/DrawerHeader";
import DrawerBody from "./Drawer/DrawerBody";

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
      className={`w-[500px] border-l overflow-y-auto px-2 ${
        show ? "me-0 duration-200" : "-me-[500px] duration-200"
      }`}
      style={styles.drawer}
    >
      <DrawerHeader onCloseHandler={onCloseHandler} />
      <DrawerBody />
    </div>
  );
};

export default Drawer;
