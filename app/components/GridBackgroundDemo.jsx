import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="fixed inset-0 w-full h-full bg-[#141414] ">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-black/[0.2] dark:bg-grid-white/[0.2]"></div>

      {/* Radial gradient for a subtle fade effect */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}



