import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const Draggable: React.FC<Props> = ({ children }) => {
  const [dX, setdX] = useState(0);
  const [dY, setdY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [left, setLeft] = useState(100);
  const [top, setTop] = useState(100);

  const startDragging = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setdX(e.screenX - e.currentTarget.getBoundingClientRect().left);
    setdY(e.screenY - e.currentTarget.getBoundingClientRect().top);
    setIsDragging(true);
  };

  const whileDragging = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDragging) {
      setLeft(e.screenX - dX);
      setTop(e.screenY - dY);
    }
  };

  const endDragging = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="draggable"
      onMouseDown={startDragging}
      onMouseMove={whileDragging}
      onMouseUp={endDragging}
      onMouseOut={endDragging}
      style={{ top, left }}
    >
      {children}
    </div>
  );
};

export default Draggable;
