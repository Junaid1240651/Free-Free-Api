import React from "react";

function Endpoint() {
  return (
    <div class="bg-gray-950 text-center text-white w-full p-5 pb-7">
      <div>
        Your REST endpoint is ready to make GET, POST, PUT and DELETE requests
      </div>
      <div class="overflow-x-auto bg-blue-100 text-black border border-black rounded-md mt-2 p-4 mb-5 mx-4 sm:mx-16 md:mx-24 lg:mx-48 xl:mx-60 text-sm sm:text-md md:text-md lg:text-md xl:text-md">
        https://crudcrud.com/api/b59e49535f8e441b9c15279b7a5d1fc4
      </div>
      <a
        class="bg-sky-900 text-white border border-black rounded-lg pb-3 pt-2 pl-5 pr-5"
        href="/Dashboard/b59e49535f8e441b9c15279b7a5d1fc4"
      >
        Check Endpoint Information
      </a>
    </div>
  );
}
export default Endpoint;