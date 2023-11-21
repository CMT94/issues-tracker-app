import React from "react";

import { WindowSize } from "@/types";

interface DrawerProps {
  show: boolean;
}

const Drawer = ({ show }: DrawerProps): JSX.Element => {
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
      className={`w-[400px] border-l ${
        show ? "me-0 duration-200" : "-me-[400px] duration-200"
      }`}
      style={styles.drawer}
    ></div>
  );
};

export default Drawer;
