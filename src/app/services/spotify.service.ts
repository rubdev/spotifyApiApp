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
      'Authorization': 'Bearer BQCqe1UerqEzF4grFPrqMSIfdej9poO7xT2NcqTtWjlbhVkrTiqVk2RbtidwqcW5u3dGhY_4n8kmDVl9C1I'
    });
    // Para hacer la petición get con el token generado
    this.clienteHttp.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe( datos => {
        console.log(datos);
      });
  }

}
