# Roostify coding challenge

## The challenge
Problem Statement:-
* Create an app, which shows up list of applicants, with data such as first name, last name, occupation, ssn information.
* Initial data will be loaded asynchronously, from a mock json.
* One should be able to add/ update/ remove applicant.
* Add/ Update should take to a form based details screen, and navigate back to list dashboard on successful save/ update or cancel.
* Remove should ask for a confirmation in a modal window, before actually removing the borrower.

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

### App walkthrough
Once both react and the json database are running, the user should see a list of applicants.

#### Adding applicants
To add an applicant, click the *add applicant* button on the homepage. The user will be redirected
to a form. After filling in the relevant information and hitting the save button, the user will be rerouted
to the homepage, and information for the newly created applicant will be visible.

#### Removing an applicant
To remove an applicant, click the *remove applicant* button beneath the relevant applicant's information
on the homepage. The user will be presented with a modal asking to confirm the decision. If confrimed,
The user modal will disappear, the applicant object will be removed from the json database and will no longer render to the DOM.

#### Updating an applicant
To update an applicant, click the *update applicant* button underneath the relevant applicant information.
The user will be redirected to a form, which will be prefilled with the relevant applicants information.
Any changes made to the form will be reflected in the json database once the user clicks the *confirm edit* button, and they will be redirected to the homepage.

### Notes on the challenge
I am so grateful to have had the opportunity to work on this challenge. It was a fun project to work on, 
and I think a great way for candidates to showcase their knowledge of CRUD functionality and basic ability to work with an api. I look forward to hearing feedback on my perfomance. Thank you! 
-Mario Campopiano
