import useGetCourseById from "../hooks/useGetCourseById";
import useUserData from "../hooks/useUserData";
import { useEffect } from "react";

const IndividualCourse = () => {
  const { course, isLoading } = useGetCourseById();

  console.log(course);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!course) {
    return (
      <p className="flex justify-center font-bold text-xl text-center mt-6">
        No course available , Please enroll in a course
      </p>
    );
  }
  return (
    <div>
      <div className="flex justify-center w-5/6 mx-auto mt-6">
        <h1 className="text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 drop-shadow-4xl font-extrabold justify-center">
          My Courses
        </h1>
      </div>
      {course && course ? (
        <table className="w-full md:w-5/6 md:mx-auto text-sm text-left rtl:text-right  mt-10">
          <thead className="text-lg text-black uppercase bg-blue-200  ">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Course ID
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Course Name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Course Detail
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Teacher
              </th>
            </tr>
          </thead>
          <tbody>
            {course.map((item) => (
              <tr key={item.courseNo}>
                <td className="px-6 py-4 text-center">{item.courseID}</td>
                <td className="px-6 py-4 text-center">{item.courseName}</td>
                <td className="px-6 py-4 text-center">{item.courseDetail}</td>
                <td className="px-6 py-4 text-center">{item.userID}</td>
              </tr>
            ))}
            <tr className="bg-[#004225] text-white text-lg"></tr>
          </tbody>
        </table>
      ) : (
        <p className="text-center font-semibold text-xl mt-14">
          No Course to Display
        </p>
      )}
    </div>
  );
};

export default IndividualCourse;
