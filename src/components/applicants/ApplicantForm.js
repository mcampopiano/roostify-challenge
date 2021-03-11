/*
This component has the form both for creating and updating an applicant object.
I am making use of the match property that comes from react-router-dom
*/
import React, { useContext, useEffect, useState } from "react"
import { ApplicantContext } from "./ApplicantProvider"

export const ApplicantForm = (props) => {
    const { addApplicant, applicants, updateApplicant, getApplicants } = useContext(ApplicantContext)

    // Initialize applicant to be an object with the keys that should be on an applicant object
    const [applicant, setApplicant] = useState({ firstName: "", lastName: "", occupation: "", SSN: 0 })

    // check the match.params to see if the user routed here by an edit button associated with an applicant
    const editMode = props.match.params.hasOwnProperty("applicantId")

    /*
    If edit mode is true, make the value of applicant the value stored in the location object
    from react-router-dom library. If there is not an applicant object, set it equal to the
    initialized values.
    */
    const getApplicantInEditMode = () => {
        if (editMode) {
            const selectedApplicant = props.location.state.chosenApplicant || { firstName: "", lastName: "", occupation: "", SSN: 0 }
            setApplicant(selectedApplicant)
        }
    }

    const handleControlledInputChange = event => {
        /*
        Make a copy of the applicant object, then dynamically modify the key and value to        
        customer input from the form below, then set the the value of the applicant object
        */
        const newApplicant = Object.assign({}, applicant)
        newApplicant[event.target.name] = event.target.value
        setApplicant(newApplicant)
    }

    useEffect(() => {
        getApplicants()
    }, [])

    // After getApplicants has run, this useEffect will run.
    useEffect(() => {
        getApplicantInEditMode()
    }, [applicants])

    const buildApplicant = () => {
        if (editMode) {
            updateApplicant({
                id: applicant.id,
                firstName: applicant.firstName,
                lastName: applicant.lastName,
                occupation: applicant.occupation,
                SSN: applicant.SSN
            })
                .then(props.history.push("/"))
        } else {

            addApplicant({
                firstName: applicant.firstName,
                lastName: applicant.lastName,
                occupation: applicant.occupation,
                SSN: applicant.SSN
            })
                .then(props.history.push("/"))
        }
    }

    return (
        <form>
            <h1>Enter applicant information</h1>
            <fieldset>
                <label htmlFor="firstName">Applicant first name: </label>
                <input type="text" name="firstName" value={applicant.firstName} onChange={handleControlledInputChange} />
            </fieldset>
            <fieldset>
                <label htmlFor="lastName">Applicant last name: </label>
                <input type="text" name="lastName" value={applicant.lastName} onChange={handleControlledInputChange} />
            </fieldset>
            <fieldset>
                <label htmlFor="occupation">Applicant current occupation: </label>
                <input type="text" name="occupation" value={applicant.occupation} onChange={handleControlledInputChange} />
            </fieldset>
            <fieldset>
                <label htmlFor="SSN">Applicant SSN: </label>
                <input type="number" name="SSN" value={applicant.SSN} onChange={handleControlledInputChange} />
            </fieldset>
            <button type="submit"
                onClick={event => {
                    event.preventDefault()
                    buildApplicant()
                }}>{editMode ? "confirm edit" : "save applicant" }</button>
            <button type="submit"
                onClick={event => {
                    event.preventDefault()
                    props.history.push("/")
                }}>Cancel</button>
        </form>
    )
}