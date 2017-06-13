import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'titleFilter',
    pure: false
})

export class TitlePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        let filtre = args[0].toLowerCase();
        return filtre ? value.filter(film => film.titre.toLowerCase().indexOf(filtre) != -1) : value;
    }
}