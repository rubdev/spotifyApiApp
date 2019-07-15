import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQDf9NCG-fRRy4uhI8Q19-jUoHxjiTBnnbIFVigTN4Hkk3aAWbq7rSuz1x7ErDuFYy8Grb5rfoBG6hRndnk';

  constructor( private clienteHttp: HttpClient) {
    console.log('Servicio Spotify listo');
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    // Cabecera necesaria para que funcione el token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ this.token }`
    });
    return this.clienteHttp.get(url, { headers });
  }

  getSpainNewReleases() {
    console.log('Spotify service -> Cargando nuevos lanzamientos en España');
    // Para hacer la petición get con el token generado
    return this.getQuery('browse/new-releases').pipe( map( data => data['albums'].items ) );
  }

  getArtist( termino: string ) {
    console.log('Spotify service -> Cargando artistas encontrados');
    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`).pipe ( map( data =>  data['artists'].items ) );
  }

}
