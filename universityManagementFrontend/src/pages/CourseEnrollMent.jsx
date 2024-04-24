import { useState } from "react";
import useEnrollment from "../hooks/useEnrollment";
import useGetAllUser from "../hooks/useGetAllUser";
import useGetCourse from "../hooks/useGetCourse";
import useUserData from "../hooks/useUserData";

const CourseEnrollMent = () => {
  const { courses } = useGetCourse();
  const { userDetails } = useUserData();
  const [isLoading, setIsLoading] = useState(false);

  const handleEnroll = async (item) => {
    const confirmed = window.confirm(
      "Are you sure you want to enroll in this course?"
    );

    if (!confirmed) {
      return;
    }
    setIsLoading(true);
    try {
      await useEnrollment(item.courseID, userDetails.userID);
    } catch (error) {
      console.error("Error during enrollment process:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="box-border w-full h-3/5 mx-auto mt-10">
      <div className="flex justify-between w-5/6 mx-auto">
        <h1 className="text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 drop-shadow-4xl font-extrabold justify-center">
          Courses Enrollment
        </h1>
      </div>
      {courses && courses ? (
        <table className="w-full md:w-5/6 md:mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-10">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Course ID
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Course Name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Teacher
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((item) => (
              <tr key={item.courseNo}>
                <td className="px-6 py-4 text-center">{item.courseID}</td>
                <td className="px-6 py-4 text-center">{item.courseName}</td>
                <td className="px-6 py-4 text-center">{item.userID}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleEnroll(item)}
                    disabled={isLoading}
                    className=" bg-[#40A2E3] hover:bg-[#BBE2EC] text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    {isLoading ? "Enrolling..." : "Enroll"}
                  </button>
                </td>
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
      {/* <div className="flex justify-between w-2/4 mx-auto mt-6 mb-6">
    <button
      onClick={paginateBack}
      disabled={currentPage === 1}
      className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <svg
        className="w-3.5 h-3.5 me-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 5H1m0 0 4 4M1 5l4-4"
        />
      </svg>
      Previous
    </button>
    <button
      className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      onClick={paginateFront}
      disabled={currentPage * postsPerPage >= filteredUser.length}
    >
      Next
      <svg
        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </button>
  </div> */}
    </div>
  );
};

export default CourseEnrollMent;
