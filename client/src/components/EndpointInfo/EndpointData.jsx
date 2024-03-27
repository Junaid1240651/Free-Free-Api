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
        `https://stack-craft.vercel.app/${id}/${resource}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEndpointData();
  }, []);
  if (!data) return <LoadingScreen />;

  return (
    <pre className="h-[100vh] bg-bgJson">
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
