import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToArrayPipe'
})
export class ObjectToArrayPipePipe implements PipeTransform {

  transform(value: any): any[] {
    return Object.keys(value).map((key) => ({
      key,
      value: value[key],
    }));
  }

}
