import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../Layout/Footer";

const EndpointLink = () => {
  const { id } = useParams();
  const [Id, setId] = useState(id);
  const [fieldNames, setFieldNames] = useState([]);
  const navigate = useNavigate();
  const getFieldNames = async () => {
    navigate(`/Dashboard/${Id}`);
    try {
      const response = await axios.get(
        `http://localhost:3000/Dashboard/${Id}`,
        {
          id: Id,
        }
      );
      console.log(response.data);
      setFieldNames(response.data);
    } catch (error) {
      console.log(error);
      setFieldNames(null);
    }
  };
  useEffect(() => {
    getFieldNames();
  }, [id]);
  return (
    <div>
      <div className="bg-blue-300  sm:px-10 md:px-15 px-10">
        <div className="py-16">
          <div className="flex justify-center text-3xl pt-6">
            <h1>Endpoint Information</h1>
          </div>
          <div className="gap-6 flex flex-col justify-center items-center text-lg pt-6 sm:flex-col md:flex-row sm:justify-center">
            <div className="flex align-middle w-[100%] sm:w-[100%]  md:w-[70%]">
              <p className="text-gray-700 hidden sm:block rounded-md rounded-r-none  border-r-0 border-solid border-2 border-gray-600 px-3 py-1 select-none">
                https://testtest.com/api/
              </p>
              <input
                value={Id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter an endpoint identifier, e.g. 9fc05a32ca874e5eb28eacc79f8da98b"
                className="outline-none text-lg  rounded-md sm:rounded-l-none  border-solid border-2 border-gray-600 pl-3 py-1 w-full"
              />
            </div>
            <button
              className="sm:w-[160px]  bg-btnBorder p-[6px] text-lg text-white rounded-md"
              onClick={getFieldNames}
            >
              Load Dashboard
            </button>
          </div>
        </div>
        {fieldNames !== null ? (
          <div className="flex flex-col py-16 text-center gap-10">
            <h1 className=" text-4xl font-normal text-btnBorder">Active</h1>
            <div className=" justify-between gap-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 ">
              <div className=" border-gray-600 border-2 rounded-md  py-4 w-full">
                <p>USED REQUESTS</p>
                <h1 className="py-2 font-medium text-2xl">
                  {fieldNames ? fieldNames.userRequests : "0"} / Unlimited
                </h1>
              </div>
              <div className=" border-gray-600 border-2 rounded-md  py-4 w-full">
                <p>REST RESOURCES</p>
                {fieldNames?.resource?.length > 0 ? (
                  fieldNames.resource.map((data, index) => (
                    <Link key={index} to={`/${Id}/${data}`}>
                      <p className="text-btnBorder cursor-pointer  font-medium text-xl">
                        {data}
                      </p>
                    </Link>
                  ))
                ) : (
                  <p>--</p>
                )}
              </div>
              <div className=" border-gray-600 border-2 rounded-md  py-4 w-full">
                <p>TIME UNTIL EXPIRATION</p>
                <h1 className="py-2 font-medium text-2xl">Unlimited</h1>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-4xl">Endpoint Doesn&apos;t Exist</p>
        )}
        <div className="flex justify-center items-center flex-col py-16 text-center gap-10">
          <h1 className="text-4xl font-light">
            Top up to keep your endpoint active
          </h1>

          <div className="grid max-w-[1280px]  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 text-white">
            <div className="flex gap-12 flex-col bg-bgCard rounded-lg shadow-md px-10 py-8">
              <h2 className="text-xl font-semibold mb-2">2$</h2>
              <h2 className="text-xl font-semibold mb-2">
                10 days 1000 requests
              </h2>
              <p className="text-lg">
                Extend your endpoint&apos;s life by 10 days and get more
                requests.
              </p>
              <button className="hover:bg-btnBorder py-2 border-btnBorder border-2 rounded-md w-full">
                Buy
              </button>
            </div>

            <div className="flex gap-12 flex-col bg-bgCard rounded-lg shadow-md px-10  py-8">
              <h2 className="text-xl font-semibold mb-2">3$</h2>
              <h2 className="text-xl font-semibold mb-2">
                30 days 3,000 requests
              </h2>
              <p className="text-lg">
                Extend your endpoint&apos;s life by a month and get more
                requests.
              </p>
              <button className="hover:bg-btnBorder py-2 border-btnBorder border-2 rounded-md w-full">
                Buy
              </button>
            </div>

            <div className="md:col-span-full lg:col-span-1 flex gap-12 flex-col bg-bgCard rounded-lg shadow-md px-10 md:px-8  py-8">
              <h2 className="text-xl font-semibold mb-2">5$</h2>
              <h2 className="text-xl font-semibold mb-2">
                30 days 100,000 requests
              </h2>
              <p className="text-lg">
                Extend your endpoint&apos;s life by a month and get A LOT MORE
                requests.
              </p>
              <button className="hover:bg-btnBorder py-2 border-btnBorder border-2 rounded-md w-full">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EndpointLink;
