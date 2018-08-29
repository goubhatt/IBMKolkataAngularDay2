import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piglatin'
})
export class PiglatinPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if(!value || value.trim().length===0){
      return '';
    }

    var myArray1:string[];

    myArray1 = value.split(' ');
    console.log(myArray1);
    for(var i=0;i<myArray1.length;i++){
      var firstLetter = myArray1[i].substring(0,1);
      var restLetters = myArray1[i].substring(1);
      if((restLetters + firstLetter)!=''){
        myArray1[i] = restLetters + firstLetter + 'a'; 
      } 
    }

    return myArray1.join(' ');
  }

}
