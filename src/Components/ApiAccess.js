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
        // this.setState({ apiNo: auth })


        const accessData = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${auth.access_token}`,
            },
        }
        this.setState({ authData: accessData })
                
        //  const authArtist=this.state.authData;  
          const apiSession = this.state.authData

        sessionStorage.setItem("accessToken", JSON.stringify(apiSession));     
        
        // const getData = () => {   }
        
        // setTimeout(getData, 8000);
        // console.log( getData());
    }
    render() {
        
        
        // const localStorageKey = "Authorize";
        // const apiSession = this.state.authData

        // sessionStorage.setItem("accessToken", JSON.stringify(apiSession));

        // const localStorageKey = "accessToken";
        

        return (
            <div>ApiAccess</div>
        )
    }
}
