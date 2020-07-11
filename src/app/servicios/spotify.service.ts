import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import axios from 'axios';
import * as QueryString from 'qs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(
    private http: HttpClient
  ) { }

  getToken() {
    const url = 'https://accounts.spotify.com/api/token'
    const requestBody = {
      grant_type: 'client_credentials',
      client_id: 'ee78f43177d54a55948500e3c64f8db0',
      client_secret: '125ca3136c424fc8b3bd04a7c7d912ba'
    }

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    axios.post(url, QueryString.stringify(requestBody), config )
      .then((result) =>{
        let token = result.data.access_token;
        localStorage.setItem('token', token);
        console.log(token);
      })
      .catch((error) =>{
        console.log(error);
      })
  }

  getQuery(query: string) {
    let token = localStorage.getItem('token');
    const URL = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    console.log(headers);

    return this.http.get(URL, { headers })
  }

  getNewReleases() {

    //MAPEA LOS DATOS QUE RECIBE PARA QUE SOLO DEVUELVA LO QUE A MI ME INTERESA
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    //         .pipe( map( data => data['albums'].items) );

  }

  getArtist(terminoBusqueda: string) {

    return this.getQuery(`search?q=${terminoBusqueda}&type=artist&limit=10`)
      .pipe(map(data => data['artists'].items));

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQArdNHGQSCn2OW3rOKSl-U4DUYEsYDKr7nIjXQ1U0VvcXrcWTm8dHtBxcC1a8smvRY7sSin7W1VOv2EbOk'
    // });
    // return this.http.get(`https://api.spotify.com/v1/search?q=${ terminoBusqueda }&type=artist&limit=10`, {headers})
    //               .pipe( map(data => {
    //                 return data['artists'].items;
    //               }));
  }

  getOneArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));
  }
}
