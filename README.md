# dynamic-form-backend

# Tech stack #
express.js, nodemon, sequelize [Note: version are avilable in packge.json with all dependenies]

# Project setup guidelines #
- Clone the project : git clone 
- Install node-modules: npm i
- Create empty "form_database" database in mysql 
- Run migration: npx sequelize-cli db:migrate
- Run sidders: npx sequelize db:seed:all
- Run project: npm run dev


# Admin Credentials #
email: admin@gmail.com
password: admin123

# User Credentials #
email: user@gmail.com
password: user123

emai: user1@gmail.com
password: user1234

# Approach #
After reading the task details, i recognized that it is similar like google form, admin can create form & user can add response. I have like the concept of project, where admin can add fields as per their requirement.

When imeplementing ptoject, i got stuck into fixing error in saving checkbox & radio box options in frontend. After debugging code, i made changes in code to fix the issue.

# Estimated time #
FE: 6 hours
BE: 3 hours 30 minutes

# Pending #
- Deploy code on server 

# Sample data #
- I have added seeders for sample data.


