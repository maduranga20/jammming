// const CLIENT_ID = "988c419b166f4e69b24d2153afe18037"
// const REDIRECT_URI=process.env.REACT_APP_REDIRECT_URL
// const localStorageKey = "accessToken";

let Spotify = {
  // storeAccessToken(accessToken, ttl) {
  //   const now = new Date();

   
    
  //   const item = {
  //     value: accessToken,
  //     expiry: now.getTime() + ttl * 1000,
  //   };
  //   localStorage.setItem(localStorageKey, JSON.stringify(item));
  // },

  // getStoredAccessToken() {
  //   const itemStr = localStorage.getItem(localStorageKey);

  //   if (!itemStr) {
  //     return false;
  //   }

  //   const item = JSON.parse(itemStr);
  //   const now = new Date();

  //   if (now.getTime() > item.expiry) {

  //     localStorage.removeItem(localStorageKey);
  //     return false;
  //   }
  //   return item.value;
  // },

   getAccessToken() {
   



    // if (this.getStoredAccessToken()) {
    //   return this.getStoredAccessToken();
    // }

    // const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    // const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    // if (accessTokenMatch && expiresInMatch) {
    //   const expiresIn = Number(expiresInMatch[1]);
    //   this.storeAccessToken(accessTokenMatch[1], expiresIn);
    //   window.history.pushState("Access Token", null, "/");
    //   return this.getStoredAccessToken();
    // } else {
    //   const accessUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
    //   window.location = accessUrl;
    //   console.log(accessUrl);
    //   return false;
    // }
    let tokenTest="tokenTest";
    return tokenTest;

  },

  async search(term) {
    // const accessToken = Spotify.getAccessToken();
    
// console.log("search method from Spotify " + term);

 const url = `https://spotify-api24.p.rapidapi.com/search/?offset=0&limit=10&q=${term}&type=tracks&numberOfTopResults=5`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '10f83543d8mshf920977f29b0c95p1271b0jsn93902f834139',
		'x-rapidapi-host': 'spotify-api24.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  const selectArtist= result.tracks.items?.map((track) => (track.data.artists.items[0].profile.name));
   console.log(selectArtist);
  // const artistinfo=selectArtist?.map((track)=>(track[0].profile.name));
  // console.log(artistinfo);
  const select= result.tracks.items?.map((track) => (
  { trackid: track.data.id,
    trackname: track.data.name,
  }
   
   
   
  ))
	
return select;
} catch (error) {
	console.error(error);
}



    // if (accessToken) {
    //   const response = await fetch(
    //     `https://api.spotify.com/v1/search?type=track&q=${term}`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     }
    //   );
    //   const jsonResponse = await response.json();

    //   if (!jsonResponse.tracks) {
    //     return [];
    //   }
    //   return jsonResponse.tracks.items.map((track) => ({
    //     id: track.id,
    //     name: track.name,
    //     artist: track.artists[0].name,
    //     album: track.album.name,
    //     uri: track.uri,
    //   }));
    // }
    // return false;
    // return term
  },
  // async savePlaylist(playlistName, trackUris) {
  //   if (playlistName && trackUris) {
  //     let response, jsonResponse;
  //     const accessToken = this.getAccessToken();
  //     const headers = {
  //       Authorization: `Bearer ${accessToken}`,
  //     };
  //     let userId;
  //     response = await fetch(`https://api.spotify.com/v1/me`, {
  //       headers: headers,
  //     });
  //     jsonResponse = await response.json();
  //     userId = jsonResponse.id;

  //     response = await fetch(
  //       `https://api.spotify.com/v1/users/${userId}/playlists`,
  //       {
  //         headers: headers,
  //         method: "POST",
  //         body: JSON.stringify({ name: playlistName }),
  //       }
  //     );
  //     jsonResponse = await response.json();
  //     const playlistId = jsonResponse.id;

  //     response = await fetch(
  //       `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
  //       {
  //         headers: headers,
  //         method: "POST",
  //         body: JSON.stringify({ uris: trackUris }),
  //       }
  //     );
  //     return await response.json();
  //   }
  //   return;
  // },
};


export default Spotify;