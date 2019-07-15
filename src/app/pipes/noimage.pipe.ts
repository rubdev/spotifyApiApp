import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( imagenes: any[]): string {
    let rutaImagen: string = '';
    if ( !imagenes ) {
      rutaImagen = 'assets/img/noimage.png';
    }
    if ( imagenes.length > 0 ) {
      rutaImagen = imagenes[0].url;
    } else {
      rutaImagen = 'assets/img/noimage.png';
    }
    return rutaImagen;
  }

}
