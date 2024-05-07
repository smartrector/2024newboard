import React from "react";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between h-[50px]">
        <h1>로고</h1>
        <div className="flex h-[100%]">
          <ul className="flex justify-center items-center px-5">
            <li>리스트</li>
            <li>글작성</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
