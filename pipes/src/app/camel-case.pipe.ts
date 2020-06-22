import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let values  = value.split(' ');
    console.log(values)
    let result = values.map( word => this.convert(word)).reduce((atual, next) => `${atual} ${next}`);
    return result;

  }
  convert(value: string) {
      return value.substr(0,1).toUpperCase() +
        value.substr(1).toLocaleLowerCase();
  }

}
