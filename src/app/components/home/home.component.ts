import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  ultimosLanzamientoESP: any[] = [];
  cargando: boolean;

  constructor( private _spotiService: SpotifyService) {
    this.cargando = true;
    this._spotiService.getSpainNewReleases()
        .subscribe( (datos: any) => {
          this.ultimosLanzamientoESP = datos;
          this.cargando = false;
          console.log(this.ultimosLanzamientoESP);
        });
  }

}
