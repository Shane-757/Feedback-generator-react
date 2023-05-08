import React from "react";
import StatisticsApp from "./StatisticsApp/StatisticsApp";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <StatisticsApp />
     
    </div>
  );
};
