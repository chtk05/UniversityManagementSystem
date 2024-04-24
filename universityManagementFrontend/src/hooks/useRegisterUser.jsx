import axios from "axios";
import toast from "react-hot-toast";
const useRegisterUser = async (userData) => {
  try {
    const res = await axios.post("/register", userData);
    toast.success(`Registered Successfully`);

    return res.data;
  } catch (err) {
    {
      if (err.response) {
        const errorMessage = err.response.data.message;
        toast.error(errorMessage);
      } else {
        toast.error("An error occurred while registering the user.");
      }
      throw err;
    }
  }
};

export default useRegisterUser;
