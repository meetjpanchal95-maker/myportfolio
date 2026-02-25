import React from "react";

function DescribeListBlock({ item, index }: { item: any; index: number }) {
  return (
    <div key={index}>
      <div
        className={`text-base font-montserrat ${item.className ? item.className[0] : ""}`}
      >
        {item.title}
      </div>
      {item.description && (
        <div
          className={`text-base font-source-code ${item.className ? item.className[1] : ""}`}
        >
          {item.description}
        </div>
      )}
      {item.points && (
        <div
          className={`text-base font-source-code ${item.className ? item.className[1] : ""}`}
        >
          {item.points.map((point, index) => (
            <span key={index} style={{ display: "block" }}>{point}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default DescribeListBlock;
