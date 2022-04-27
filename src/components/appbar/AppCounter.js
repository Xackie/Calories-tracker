// import { useEffect } from "react";
import React, { useEffect, useState } from "react";

function AppCounter({ total }) {
  const [showElement, setShowElement] = useState(false);
  // useEffect((total) => {
  //   if (total > 2000) {
  //     setShowElement(true);
  //     setTimeout(function () {
  //       setShowElement(false);
  //     }, 5000);
  //   }
  // }, []);

  const divStyle = {
    color: "black",
  };

  // if (total <= 2000) {
  return (
    <>
      {total > 2000 ? (
        <div className="appcounter-2">
          Total:
          <span style={divStyle}>{total}</span>
          {/* {showElement ? ( */}
            <div className="alert">
              <span style={{ color: "red" }}>Hey! </span> You have exceeded the
              daily limit
            </div>
          {/* ) : (
            <></>
          )} */}
        </div>
      ) : (
        <div className="appcounter">
          Total: <span>{total}</span>
        </div>
      )}
    </>
  );
  //   } else if (total > 2000) {
  //     return (
  //       <>
  //         <div className="appcounter-2">
  //           Total:
  //           <span style={divStyle}>{total}</span>
  //           {showElement? <div className="alert">
  //             <span style={{ color: "red" }}>Hey! </span> You have exceeded
  //             the daily limit
  //           </div>
  //           :<></>}
  //         </div>

  //       </>
  //     );
  //   }
}

export default AppCounter;
