// This component will set how each applicant card will look when rendered to the DOM
import React, { useContext } from "react"
import { ApplicantContext } from "./ApplicantProvider"

export const Applicant = ({ applicant }) => {
    const {deleteApplicant} = useContext(ApplicantContext)

    return (
        <div className="applicant">
            <p>Name: {applicant.firstName} {applicant.lastName}</p>
            <p>Occupation: {applicant.occupation} </p>
            <p>SSN: {applicant.SSN} </p>
            <button onClick={event => {
                if (window.confirm("Are you sure you want to remove the applicant? This cannot be undone."))
                deleteApplicant(applicant)
            }}>Remove applicant</button>
        </div>
    )
}