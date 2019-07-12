import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQCX1Yiu3WXZkn26mXwV_PSMN10zxJq7VoD9Jw2YbglaMqqxZJdukxdpkQGDOJcuihQi0NqR1rehgVRuseU';

  constructor( private clienteHttp: HttpClient) {
    console.log('Servicio Spotify listo');
  }

  getSpainNewReleases() {
    console.log('Spotify service -> Cargando nuevos lanzamientos en España');
    // Cabecera necesaria para que funcione el token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ this.token }`
    });
    // Para hacer la petición get con el token generado
    return this.clienteHttp.get('https://api.spotify.com/v1/browse/new-releases', { headers })
                  .pipe( map( data => data['albums'].items ) );
  }

  getArtist( termino: string ) {
    console.log('Spotify service -> Cargando artistas encontrados');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ this.token }`
    });
    return this.clienteHttp.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=20`, { headers })
                .pipe ( map( data =>  data['artists'].items ) );
  }

}
