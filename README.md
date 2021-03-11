# Roostify coding challenge

## The challenge
Problem Statement:-
-- Create an app, which shows up list of applicants, with data such as first name, last name, occupation, ssn information.
-- Initial data will be loaded asynchronously, from a mock json.
-- One should be able to add/ update/ remove applicant.
-- Add/ Update should take to a form based details screen, and navigate back to list dashboard on successful save/ update or cancel.
-- Remove should ask for a confirmation in a modal window, before actually removing the borrower.

## Installations
In the terminal, run the commands:
```
git clone git@github.com:mcampopiano/roostify-challenge.git
cd roostify-challenge
npm install react-router-dom
```

### In order to run the json server, you will need to download Node.js
For windows users, run the following commands in the terminal: 
```
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install -y nodejs
```
 Then run `sudo npm i -g  json-server`

 For MAC users, visit the Node.js site and install the LTS release,
 then run `sudo npm i -g serve json-server`


## Using the app
### Running the application
In the terminal, run the command: `npm start`
(*NOTE* if this does not work, trying running `npm install` first)

### Running the json server
In a separate terminal window, navigate to the api directory, and run the following command:
`json-server -p 8088 -w database.json`

