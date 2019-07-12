import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private clienteHttp: HttpClient) {
    console.log('Servicio Spotify listo');
  }

  getSpainNewReleases() {
    console.log('Spotify service -> Cargando nuevos lanzamientos en España');
    // Cabecera necesaria para que funcione el token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC9Yd59VRZ3Ax51frqH-a6FDftM4HWe6Gnj2YVVpAxl5G12aqfLgBdRSWNUOUWmJzyOqkIkKZr8nG4QgIg'
    });
    // Para hacer la petición get con el token generado
    return this.clienteHttp.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

}
