# Project Title

HOSPITAL-API designed for maintaining and creating the reports of status(whether he/she is negative, positive or need to quarantine) of patients for any Hospital.

## Prerequisites

1. You need to install NodeJs and MongoDB and Postman before running this project.
2. Install them according to your Operating System.

### Getting Started

1. Clone this Project
2. Go to cloned project directory of it with cd and open terminal. 
3. To install required dependencies run command:
   ```
   npm install
   ```
4. To install nodemon run command:
   ```
   npm install nodemon 
   ```

### Starting Server

   Start the server using command:
   ```
   npm start
   ```
### API and end points

 Open Postman and there you can hit differents api's. 
 Base URL to be used before every api requests 
```
localhost:6000/api/v1
```

1. `/doctors/register` - POST request to create and register doctor you have to give username, password, confirm_password and name in body and select x-www-form-urlencoded.(Video link attached below)

2. `/doctors/login` - POST request to login the doctor in app you have to provide correct username and password in body and select x-www-form-urlencoded and copy jwtToken 
   that you will get in data part in postman for further api requests.(Video link attached below)

3. `/patients/register` - POST request to register patients in hospital, you have to provide his/her phoneNumber, name in body,and have to set key in Headers as Authorization
    and value as `Bearer copiedtoken` and when you get status code as 200, you have to use id as his/her phoneNumber.(Video link attached below)

4. `/patients/:id/create_report` - POST request to create the report for any specific patient, you have to provide his/her id that is phoneNumber in params, status in body
    and have to set key in Headers as Authorization  and value as `Bearer copiedtoken` and you can only give one out of these four status as-
   `Negative`, `Travelled-Quarantine`, `Symptoms-Quarantine`, `Positive-Admit`
   (Video link attached below)

5. `/patients/:id/all_reports` - GET request to get all reports of a specific patient till date,you have to provide his/her id that is phoneNumber by which he/she is registered 
    and have to set key in Headers as Authorization  and value as `Bearer copiedtoken`. (Video link attached below)

6. `/reports/:status` - GET request to get all reports of a specific status till date, you have to provide status in params out of the four mentioned above and have to set 
    key in Headers as Authorization  and value as `Bearer copiedtoken`. (Video link attached below)

## Versioning

We have use version-1 of api so that we can upgrade further in future according to our needs.

## Directory Structure

1. `config`: Contains all config files like passport strategy files and mongoose files.
2. `controllers`: It Contains all the api files from where all the operations take place like registering and creating reports.
3. `models`: Contains all Schema files or how our doctor,patients and reports are going to look in database.
4. `routes`: It contains all the routes to forward the api requests to controllers and contains different routes for doctors, patients and reports.

## Link to video to understand API requests

 `https://drive.google.com/file/d/1XBUs2m2rdGTnxiSyPuX4XKka80w1TbAo/view?usp=sharing`




