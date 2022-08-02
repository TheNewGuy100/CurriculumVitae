import React from "react"

export default class ADMLogger extends React.Component {
    public static log(event: string) {
        console.log(`[EVENT]: ${JSON.stringify(event)}`)
    }
}