**University Management System **
** This folder is the main folder which contains two different folder i.e. universityManagementFrontend and universityManagementServer to run frontend and backend respectively. **
This is The University management system which has the following features
- Register , log-in
- Roles (Student / Teacher / Admin)
- Authentication 
- Course Enrollment
- Student Table -> Students are able to see which course they have enrolled
- Teacher Table(Dashboard) -> Teachers are able to see the students that enrolled their courses
- Coures Table -> List of courses

**Tech Stacks**
- Node.js
- Express.js
- MySql
- Javascript
- React.js
- TailwindCss


** Container ** 
With this system we utilise the use of third party tool named Docker, in each folder of frontend and backned there is one "Dockerfile" and the outhermost of the folder contains "docker-compose.yml"ใ
The docker it specified the docker version and the service block defiend the container that need to be run to perform the application. We have four different containers that are
1) db - which is th database container
2) backend to provide the backend services
3) frontend to provide the client side service
4) adminer to utilise the database management via adminer tool
5) network container
To run the docker-compose file we can run using command "docker-compose-up"


  
