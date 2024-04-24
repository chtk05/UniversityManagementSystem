import axios from "axios";
import toast from "react-hot-toast";
const useEnrollment = async (courseID, userID) => {
  try {
    const response = await axios.post("/course", {
      courseID,
      userID,
    });
    toast.success(`Enroll course Successfully`);
    return response.data;
  } catch (err) {
    {
      if (err.response) {
        const errorMessage = err.response.data.message;
        toast.error(errorMessage);
      } else {
        toast.error("An error occurred while enroll course.");
      }
      throw err;
    }
  }
};

export default useEnrollment;
