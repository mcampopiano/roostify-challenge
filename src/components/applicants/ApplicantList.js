// This component will handle creating a list of the applicant objects which can be rendered to the DOM

import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Applicant } from "./Applicant"
import { ApplicantContext } from "./ApplicantProvider"

export const ApplicantList = () => {
    // Use object destructring to get the functions this component needs from the applicant context
    const { applicants, getApplicants } = useContext(ApplicantContext)
    const history = useHistory()

    /*
    Becuase React has an initial render phase, according to React documentation some functions need
    to be called only after the initial render. Putting them inside a use effect will have them 
    be called only after the initial render. The array passed as the second argument can contain
    any values to watch so that the function will be called again when those values change.
    In this case I passed an empty array because I only need to call this once.
    */
    useEffect(() => {
        getApplicants()
    }, [])

    return (
        <div className="applicantList">
            <h1>List of current applicants</h1>
            {/* Since the format for the return value is jsx, I need to wrap js functions in 
                curly braces. Map through each applicant in the array, 
                and for each one call the Applicant component and pass the applicant as 
                an argument to it. */}
            {
                applicants.map(applicant => (
                    <Applicant key={applicant.id} applicant={applicant} />
                ))
            }
            <button onClick={() => history.push("/applicants/form")}>Add applicant</button>

        </div>
    )
}

