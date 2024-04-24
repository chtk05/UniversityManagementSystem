import { useState, useEffect } from "react";
import axios from "axios";

const useGetCourse = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/course");
        if (response.error) {
          toast.error(response.error);
        } else {
          setCourses(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return { courses };
};

export default useGetCourse;
