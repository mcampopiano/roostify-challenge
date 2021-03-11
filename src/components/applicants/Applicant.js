// This component will set how each applicant card will look when rendered to the DOM
import React, { useContext } from "react"
import { useHistory } from "react-router"
import { ApplicantContext } from "./ApplicantProvider"

export const Applicant = ({ applicant }) => {
    const { deleteApplicant } = useContext(ApplicantContext)
    const history = useHistory()

    return (
        <div className="applicantCard">
            <p>Name: {applicant.firstName} {applicant.lastName}</p>
            <p>Occupation: {applicant.occupation} </p>
            <p>SSN: {applicant.SSN} </p>
            <section className="buttonSection">
                {/* Use the history.push method from react-router-dom library to change the url, and 
                add the applicant object that was passed in as an argument to the state of the location
                object which comes from react-router-dom. */}
                <button onClick={() => history.push(`/applicants/form/${applicant.id}`, {chosenApplicant: applicant})}>
                    Update applicant
                </button>
                <button onClick={event => {
                    if (window.confirm("Are you sure you want to remove the applicant? This cannot be undone."))
                        deleteApplicant(applicant)
                }}>Remove applicant</button>
            </section>
        </div>
    )
}