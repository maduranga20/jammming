import React, { Component } from 'react'

const clientID = process.env.REACT_APP_CLIENT_ID
const clientSecret = process.env.REACT_APP_CLIENT_SECRET
const url = "https://accounts.spotify.com/api/token";


export default class ApiData extends Component {
    constructor() {
        super();
        this.state = {
            authData: [],

        };
    }

    async componentDidMount() {
        const authParameters = {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=client_credentials&client_id=${clientID}&client_secret=${clientSecret}`  //template literals
        }

        const response = await fetch(url, authParameters);
        const auth = await response.json();

        const accessData = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${auth.access_token}`,
            },
        }
        this.setState({ authData: accessData })

        const apiSession = this.state.authData

        localStorage.setItem("accessToken", JSON.stringify(apiSession));

    }
    render() {

        return (
            <div>ApiAccess</div>
        )
    }
}
