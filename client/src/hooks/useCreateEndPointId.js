import axios from "axios";
import { useState } from "react";

const useCreateEndPointId = () => {
  const [Id, setId] = useState(localStorage.getItem("Id"));

  const createId = async () => {
    try {
      const response = await axios.post("https://stack-craft.vercel.app/");
      console.log(response.data);
      setId(response.data);
      localStorage.setItem("Id", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { Id, createId };
};

export default useCreateEndPointId;
