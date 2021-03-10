// Since I am working with an api (json database in this case) I create a context object
// with a connected Provider React Component. In the ApplicationViews component I will wrap
// any components that depend on this provider within the provider so they will be subscribed to
// changes in the context.
// First step is to create the conext, and export it so that other components can import it.
// Next I create the Provider, which will have functions for interacting with the api.
// use the useState hook to initialize the valua of applicants variable to an empty array,
// and the value of setApplicants to a function which updates the array stored in the applicants variable
// Send an HTTP request to localhost:8088 and target the applicants resource.
// The default request verb is "GET" so in the case of a get method it does not need to be specified.
// store the value of the json that is returned in a variable called response, 
// then convert the response from json to a js object and return it
// Take the returned data from previous .then and set it as the value of the applicants variable

// To create or update an applicant, I need to specify the method, headers, and body. The functions
// both take an object as a parameter, so that object must be parsed into JSON to be sent in the 
// body of the http request. Once the function has run, the function calls the getApplicants function
// again so that all compnents subscribed to this context will reflect that state of the json database

// For update, the url path needs to specify the specific applicant being updated. I use string interpolation
// to dynamically add the id to the url.

// With delete, no headers or body need to be sent.
// In order for subscribing components to have access to the functions, they must be included in the value
// of the returned context provider.

import React from "react"

export const ApplicantContext = React.createContext()

export const ApplicantProvider = props => {
    const [applicants, setApplicants] = useState([])

    const getApplicants = () => {
        return fetch("http://localhost:8088/applicants")
        .then(response => response.json())
        .then(setApplicants)
    }

    const addApplicant = applicant => {
        return fetch("http://localhost:8088/applicants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(applicant)
        })
        .then(getApplicants)
    }
    const updateApplicant = applicant => {
        return fetch(`http://localhost:8088/applicants/${applicant.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(applicant)
        })
        .then(getApplicants)
    }

    const deleteApplicant = applicant => {
        return fetch(`http://localhost:8088/applicants/${applicant.id}`, {
            method: "DELETE"
            })
            .then(getApplicants)
    }

    return (
        <ApplicantContext.Provider value={{applicants, setApplicants, getApplicants, addApplicant, updateApplicant, deleteApplicant}}>
            {props.children}
        </ApplicantContext.Provider>
    )
}

