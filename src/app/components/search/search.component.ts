import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistasEncontrados: any[] = [];

  constructor( private _spotiService: SpotifyService ) { }

  buscar( termino: string ) {
    this._spotiService.getArtist( termino )
          .subscribe( (artistas: any) => {
            this.artistasEncontrados = artistas;
            console.log(this.artistasEncontrados);
          });
  }

}
