/* 
This component will determine which components are rendered to the DOM based on the url
Most of the components are dependent on the ApplicantProvider component, so it must 
a parent to them in order to pass relevant data.
The render attribute passes certain objects and methods to the component from react-router-dom library,
specifically location, match, and history.
*/


import React from "react"
import { Route } from "react-router"
import { ApplicantForm } from "./applicants/ApplicantForm"
import { ApplicantList } from "./applicants/ApplicantList"
import { ApplicantProvider } from "./applicants/ApplicantProvider"

export const ApplicationViews = () => {
    return (
        <>
            <ApplicantProvider>
                <Route exact path="/">
                    <ApplicantList />
                </Route>
                <Route exact path="/applicants/form" render={
                    props => <ApplicantForm {...props} />
                } />
                <Route exact path="/applicants/form/:applicantId(\d+)" render={
                    props => <ApplicantForm {...props} />
                } />
            </ApplicantProvider>
            
        </>
    )
}