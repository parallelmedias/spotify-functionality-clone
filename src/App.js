import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromURL } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue} from './StateProvider';
const spotify = new SpotifyWebApi();

function App() {
  const [{user, token }, dispatch] = useStateValue();

  // Runs code if condition is met
  useEffect(() => {
    // Run code here...
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcJCHVDzTIoG4').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      });
    }
    // If it is blank inside [], this code runs ONCE when the app component loads
    // If we have a variable like [token], it runs every time the token changes
  }, []);

  // console.log("User: ", user);
  // console.log("Token: ", token);
  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
