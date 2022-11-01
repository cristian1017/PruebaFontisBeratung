import React from 'react'
import { Search } from './Search';
import { SideBar } from './SideBar'
import { Slider } from './Slider';

export const Container = () => {
  return (
    <>
      <div
        className="d-flex justify-content-start"
        style={{
          height: "800px",
          background: "#EEEEEE",
          marginLeft: "60px",
          marginRight: "60px",
          padding: "15px",
          borderRadius: "30px",
        }}
      >
        <SideBar />
        <Search />
        <Slider />
      </div>
    </>
  );
}
