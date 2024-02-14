import React from "react";


export interface DotProps {
  active: boolean;
}

const Dot: React.FC<DotProps> = ({ active }) => {
  return (
    <span
      style={{
        padding: "0px 9px",
        margin: "0 5px",
        cursor: "pointer",
        borderRadius: "50%",
        backgroundColor: `${active ? "black" : "grey"}`,
      }}
    />
  );
};

interface DotsProps {
  mates: string[];
  index: number
}

const Dots: React.FC<DotsProps> = ({ mates, index }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      {mates.map((item, i) => (
        <Dot key={item} active={index === i} />
      ))}
    </div>
  );
};

export default Dots;
