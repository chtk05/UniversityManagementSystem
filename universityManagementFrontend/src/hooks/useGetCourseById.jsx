import { useState, useEffect } from "react";
import axios from "axios";
import useUserData from "./useUserData";
import toast from "react-hot-toast";

const useGetCourseById = () => {
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { userDetails } = useUserData();
  const userIDd = userDetails && userDetails.userID;
  useEffect(() => {
    const getCourseById = async (userID) => {
      setIsLoading(true);
      try {
        const response = await axios.get(`/course/${userID}`);
        setCourse(response.data);
        console.log(response.data);
      } catch (err) {
        if (err.response) {
          const errorMessage = err.response.data.message;
          toast.error(errorMessage);
        } else {
          toast.error("An error occurred while getting course.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (userIDd) {
      getCourseById(userIDd);
    }
  }, [userIDd]);

  return { course, isLoading };
};

export default useGetCourseById;
