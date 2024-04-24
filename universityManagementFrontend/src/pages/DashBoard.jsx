import useGetAllUser from "../hooks/useGetAllUser";
import ReactEChart from "echarts-for-react";
import CountUp from "react-countup";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const { allUser } = useGetAllUser();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [filteredUser, setFilteredUser] = useState([]);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);
  const handleSeacrh = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    let filtered = allUser || [];
    if (searchQuery) {
      filtered = filtered.filter((p) => p.userFirstName.includes(searchQuery));
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    setFilteredUser(filtered.slice(indexOfFirstPost, indexOfLastPost));
  }, [searchQuery, currentPage, postsPerPage, allUser]);
  return (
    <div className="box-border w-full h-3/5 mx-auto mt-10">
      <div className="flex justify-between w-5/6 mx-auto">
        <h1 className="text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 drop-shadow-4xl font-extrabold justify-center">
          Summary
        </h1>
        <div className="flex justify-center md:justify-end  border-bg-[#40A2E3] rounded-md p-2 gap-3">
          {/* <BsSearch className="w-5 h-5 text-gray-500 absolute mt-2 ml-36 md:mr-3" /> */}
          <input
            type="text"
            placeholder="ชื่อ..."
            value={searchQuery}
            onChange={handleSeacrh}
            className="w-36 h-10 mt-2 p-2 text-sm text-gray-900 border-[#40A2E3] border-2 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
          <Link
            to="/register"
            className="mt-2 bg-[#40A2E3] p-2 text-white rounded-lg"
          >
            Create User
          </Link>
        </div>
      </div>
      {filteredUser && filteredUser ? (
        <table className="w-full md:w-5/6 md:mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-10">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Role
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                First Name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Faculty
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Telephone
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUser.map((item) => (
              <tr
                key={item.userNo}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4 text-center">{item.userID}</td>
                <td className="px-6 py-4 text-center">{item.userRole}</td>
                <td className="px-6 py-4 text-center">{item.userFirstName}</td>
                <td className="px-6 py-4 text-center">{item.userLastName}</td>
                <td className="px-6 py-4 text-center">{item.userFaculty}</td>
                <td className="px-6 py-4 text-center">{item.userEmail}</td>
                <td className="px-6 py-4 text-center">{item.usertelephone}</td>
                <td className="px-6 py-4 text-center">{item.userAddress}</td>
              </tr>
            ))}
            <tr className="bg-[#004225] text-white text-lg"></tr>
          </tbody>
        </table>
      ) : (
        <p className="text-center font-semibold text-xl mt-14">
          No User to Display
        </p>
      )}
      <div className="flex justify-between w-2/4 mx-auto mt-6 mb-6">
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
      </div>
    </div>
  );
};

export default DashBoard;
