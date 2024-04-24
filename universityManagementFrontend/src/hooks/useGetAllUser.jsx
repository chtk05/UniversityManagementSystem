import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const useGetAllUser = () => {
  const [allUser, setAllUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/users");
        if (response.error) {
          toast.error(response.error);
        } else {
          setAllUser(response.data);
          console.log(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return { allUser };
};

export default useGetAllUser;
