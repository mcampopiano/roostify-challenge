// This component will determine which components are rendered to the DOM based on the url

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