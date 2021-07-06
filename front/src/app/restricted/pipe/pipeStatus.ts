import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pipeStatus'
})
export class PipeStatus implements PipeTransform {
    transform(status: boolean): string {
        if (status == true) {
            return 'Active';
        } else if (status == false) {
            return 'Inactive';
        } else return '';
    }
}