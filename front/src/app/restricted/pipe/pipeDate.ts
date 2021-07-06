import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'pipeDate'
})
export class PipeDate implements PipeTransform {
    transform(date: string): string {
        if (date) {
            return moment(date).format('YYYY-MM-DD HH:mm');
        } else return '';
    }
}