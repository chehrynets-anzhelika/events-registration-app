# Events Registration App

## About this app

This project is a test task. This is a web application for event registration. The application has three pages:

☑️ **Board** - the main page where the user lands when launching the application. Contains a list of events that are loaded from **Firebase Realtime Database** in the form of cards. Each event contains:
* title;
* description;
* date;
* organizer;
* «**Registration**» and «**View**» buttons;

------
☑️ **Registration** - the page where the user lands by clicking on the Registration button. A modal window appears on the page where the user must enter their data:
* Full name;
* Email;
* Date of birth;
* Choose the source from where they learned about the event.

All fields are mandatory. After the user clicks «**Save**», their data is stored in the **Firebase Realtime Database** database.

-----

☑️ **Participants** - the page where the user goes by clicking on the «**View**» button in the event card. On this page, user can see all the participants who have registered for this event. If there are no users, there will be a message.

The technical task had 3 levels. This project is at the Middle level. Additionally, the following functionality was added:

1. <u>Events board page</u>: added ability to sort events by: title, event date, organizer.
2. <u>Event registration page</u>: added form validation.
3. <u>Event participants page</u>: added ability to search participants by full name, email.

>The layout is designed for desktops with a minimum screen width of 1200px.

## How to run the application

>To run this project, it is necessary that **Node.js** and **Git** are installed on your computer. 

1. Clone this repository to your local computer. 
2. Open the project in your IDE, then open the terminal.
3. Run the command 
   

### `npm i`

4. Follow the instructions in **Setting Environment Variables**.
5. After installing all dependencies, in the project directory, you can run:

  ### `npm start`

6. Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Setting Environment Variables

This project uses environment variables that are stored in the `.env` file. This file is not included in the repository for security reasons.

To set environment variables:

1. Create a `.env` file in the root directory of the project.
2. Open the `.env` file in a text editor.
3. Add environment variables in the format `KEY=VALUE`, where `KEY` is the name of the variable and `VALUE` is the value of the variable. Each key-value pair must be on a new line.
4. Example contents of a `.env` file:

- REACT_APP_API_KEY = "value"
- REACT_APP_AUTH_DOMAIN = "value"
- REACT_APP_PROJECT_ID = "value"
- REACT_APP_STORAGE_BUCKET = "value"
- REACT_APP_MESSAGING_SENDER_ID = "value"
- REACT_APP_APP_ID = "value"
- REACT_APP_DATABASE_URL = "value" 

Please ensure that you have set all required environment variables correctly before running the project.

Please note that you will need to replace KEY and VALUE with the actual keys and values ​​that your project requires.

## Technologies


![Static Badge](https://img.shields.io/badge/react-191970?style=for-the-badge&logo=react) ![Static Badge](https://img.shields.io/badge/redux%20toolkit-808000?style=for-the-badge&logo=redux) ![Static Badge](https://img.shields.io/badge/css-4682B4?style=for-the-badge&logo=css3) ![Static Badge](https://img.shields.io/badge/firebase-9932CC?style=for-the-badge&logo=firebase) ![Static Badge](https://img.shields.io/badge/react%20router-66CDAA?style=for-the-badge&logo=react%20router) ![Static Badge](https://img.shields.io/badge/vercel-8B4513?style=for-the-badge&logo=vercel)

## Deployment

Visit the app by following this link https://events-registration-app-jet.vercel.app/




