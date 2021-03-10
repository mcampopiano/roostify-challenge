// This component will set how each applicant card will look when rendered to the DOM
import React from "react"

export const Applicant = ({applicant}) => (
    <div className="applicant">
        <p>Name: {applicant.firstName} {applicant.lastName}</p>
        <p>Occupation: {applicant.occupation} </p>
        <p>SSN: {applicant.SSN} </p>
    </div>
)