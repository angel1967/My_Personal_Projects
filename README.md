# My_Personal_Projects : Miguel Angel Castaneda
This is an exercise required for my Master in Full Stack Development, below you will find a brief description and the required instructions to execute
this code in another computer.

Pre-requisites:
create a project directory- In my case I created the Bootcamp_Project directory

Setup the required packages (npm)
npm init -y
npm install express         - Allow the app to handle many HTTP requests
npm i body-parser           - Read data and convert to JSON format
npm i mongoose              - MongoDb

Write Route, Mongo DB Connection and Server in the Bootcamp.js (app code)

Update the package.JSON scripts (see in VS Code)

create a directory models with the Employee database schema in this case 3 fields empName, empEmail, empMobile
These fields will be populated with Postman later using the APIs and the GET, PATCH/PUT, DELETE functions
see in directory models the emp.js

Create a POST request in postman  http://localhost:8000/emp/create with some dummy data
You can browse (GET) the existing records by typing in your browser  http://localhost:8000/emp

For the view function, create a route line in the routes directory/emp.js (see the code)
See the function view in the controller directory/emp.js (see the code)
Use the browse function to see all the records in the database (http://localhost:8000/emp).

For the update function, create a route line in the routes directory/emp.js (see the code)
I am using the findByIdAndUpdate method, in the exercise requested if found then the record is modified (200 OK), 
if not found a new record is created (201 Created)
this is in the controller directory/emp.js (see the code)

For the delete function, create a route line in the routes directory/emp.js (see the code)
I am using the findByIdAnddelete method, in the exercise requested if found then the record is deleted (200 OK), 
if not found do nothing (204 No content)
this is in the controller directory/emp.js (see the code)


