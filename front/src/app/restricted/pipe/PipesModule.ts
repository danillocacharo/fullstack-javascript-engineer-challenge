import { NgModule } from '@angular/core';
import { PipeDate } from './pipeDate';
import { PipeStatus } from './pipeStatus';

@NgModule({
    declarations: [
        PipeDate,
        PipeStatus,
    ],
    imports: [],
    exports: [
        PipeDate,
        PipeStatus,
    ]
})

export class PipesModule{

}