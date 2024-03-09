import React from "react";

function Navigation() {
  return (
    <>
      <nav class="bg-gray-950 text-white min-h-14 w-full flex items-center justify-between">
        <a class="p-4 hover:bg-sky-900 hover:py-4" href="/">
          Home
        </a>
        <div class="cursor-pointer overflow-none">
          <a href="/">
            <img src=".\logo.jpg" alt="Logo" class="h-14" />
          </a>
        </div>
        <a class="p-4 hover:bg-sky-900 hover:py-4" href="/Dashboard">
          Dashboard
        </a>
      </nav>
    </>
  );
}

export default Navigation;
