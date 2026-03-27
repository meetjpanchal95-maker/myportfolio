import React from "react";

function ImageStack(props: any) {
  const { className, classNamePlaceholder, src } = props;

  return (
    <div className="sm:w-[20%] w-full relative sm:h-[400px] h-[1100px]">
      {/* Placeholder sits behind - gray dashed box only, no image */}
      <div
        className={`absolute inset-0 rounded-xl border-[3px] border-dashed ${classNamePlaceholder}`}
        style={{
          zIndex: 0,
          borderColor: "var(--color-text-accent)",
          background: "color-mix(in srgb, var(--color-card-bg) 65%, transparent)",
        }}
      ></div>
      {/* Image sits on top with rounded corners */}
      <div
        className={`absolute inset-0 rounded-xl border-[3px] bg-cover bg-center transition-all duration-300 hover:border-[var(--color-border-strong)] ${className}`}
        style={{
          backgroundImage: `url(${src})`,
          zIndex: 1,
          borderColor: "var(--color-text-accent)",
        }}
      ></div>
    </div>
  );
}

export default ImageStack;