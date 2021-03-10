// This component will determine which components are rendered to the DOM based on the url

import React from "react"
import { Route } from "react-router"
import { ApplicantList } from "./applicants/ApplicantList"
import { ApplicantProvider } from "./applicants/ApplicantProvider"

export const ApplicationViews = () => {
    return (
        <>
            <ApplicantProvider>
                <Route exact path="/">
                    <ApplicantList />
                </Route>
            </ApplicantProvider>
        </>
    )
}