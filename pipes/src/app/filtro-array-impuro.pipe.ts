import { Pipe, PipeTransform } from '@angular/core';

import {FiltroPipePipe} from './filtro-pipe.pipe';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
export class FiltroArrayImpuroPipe extends FiltroPipePipe {


}
