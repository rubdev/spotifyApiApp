import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  ultimosLanzamientoESP: any[] = [];

  constructor( private _spotiService: SpotifyService) {
    this._spotiService.getSpainNewReleases()
        .subscribe( (datos: any) => {
          this.ultimosLanzamientoESP = datos.albums.items;
          console.log(this.ultimosLanzamientoESP);
        });
  }

}
