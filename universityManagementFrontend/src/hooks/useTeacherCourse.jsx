import { useEffect, useState } from "react";
import useUserData from "./useUserData";
import toast from "react-hot-toast";

const useTeacherCourse = () => {
  const [students, setStudents] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { userDetails } = useUserData();
  const userID = userDetails && userDetails.userID;

  useEffect(() => {
    const fetchEnrolledStudents = async (userId) => {
      setIsLoading(true);
      try {
        const response = await axios.get(`/teachercourse/${userId}`);
        setStudents(response.data);
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
    if (userID) {
      fetchEnrolledStudents(userID);
    }
  }, [userID]);
  return { students, isLoading };
};

export default useTeacherCourse;
