// Since I am working with an api (json database in this case) I create a context object
// with a connected Provider React Component. In the ApplicationViews component I will wrap
// any components that depend on this provider within the provider so they will be subscribed to
// changes in the context.

import React from "react"

// First step is to create the conext, and export it so that other components can import it.
export const ApplicantContext = React.createContext()

// Next I create the Provider, which will have functions for interacting with the api.
export const ApplicantProvider = props => {
    // use the useState hook to initialize the valua of applicants variable to an empty array,
    // and the value of setApplicants to a function which updates the array stored in the applicants variable
    const [applicants, setApplicants] = useState([])

    const getApplicants = () => {
        // Send an HTTP request to localhost:8088 and target the applicants resource.
        // The default request verb is "GET" so in this case it does not need to be specified.
        return fetch("http://localhost:8088/applicants")
        // store the value of the json that is returned in a variable called response, 
        // then convert the response from json to a js object and return it
        .then(response => response.json())
        // Take the returned data from previous .then and set it as the value of the applicants variable
        .then(setApplicants)
    }
}

