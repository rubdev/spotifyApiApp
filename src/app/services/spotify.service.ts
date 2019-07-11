import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { 
    console.log('Servicio Spotify listo');
  }
}
