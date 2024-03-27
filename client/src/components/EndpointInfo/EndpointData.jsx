import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "./../LoadingScreen/LoadingScreen";

const EndpointData = () => {
  const { resource, id } = useParams();
  const [data, setData] = useState(null);

  console.log("Current resource:", resource, id);

  const getEndpointData = async () => {
    try {
      const response = await axios.get(
        `https://testtestapi.vercel.app/${id}/${resource}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  useEffect(() => {
    getEndpointData();
  }, [resource]);
  if (!data)
    return (
      <p className="h-[calc(100vh-56px)] overflow-auto bg-bgJson text-2xl text-white flex justify-center items-center ">
        No Data Found with this Resource Name.
      </p>
    );

  return (
    <pre className="h-[calc(100vh-56px)] overflow-auto bg-bgJson">
      {data ? (
        data.map((item, index) => (
          <pre
            className="text-lg  text-btnBorder  px-8 py-2 mx-auto"
            key={index}
          >
            {JSON.stringify([item], null, 2)}
          </pre>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </pre>
  );
};

export default EndpointData;
