import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null  // if no data retrun null
    if(!args) return value; // if no search value return data
    args= args.toLowerCase();
    console.log(args);
    
    return value.filter((item)=>{ 
      console.log(item); //filter all data
return JSON.stringify(item.productName).toLowerCase().includes(args)
    })
  }

}
