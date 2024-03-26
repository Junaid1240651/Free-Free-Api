

function Endpoint() {
    
  return (
    <div className="bg-gray-950 text-center text-white w-full p-5 pb-8">
      <div>
        Your REST endpoint is ready to make GET, POST, PUT and DELETE requests
      </div>
      <div className="overflow-x-auto bg-blue-100 text-black border border-black rounded-md mt-2 p-4 mb-5 sm:mx-4 md:mx-[16vw] text-md">
        https://testtest.com/api/831596645f1a41b48326571a360a598f
      </div>
      <a
        className="bg-sky-600 text-white border border-black rounded-2xl pb-3 pt-2 px-5 text-sm md:text-md lg:text-md xl:text-md"
        href="/Dashboard/https://testtest.com/api/831596645f1a41b48326571a360a598f"
      >
        Check Endpoint Information
      </a>
    </div>
  );
}
export default Endpoint;