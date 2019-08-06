import {Component, Input} from '@angular/core'


@Component({
  selector: 'calcu',
templateUrl: 'calc.component.html',
styles: []
})
export class CalcComponent {

// @Input() v1:any;
plusNums:number;
shout (t1:number,t2:any,t3:number){

if (t2 == "+"){
this.plusNums = +t1 + +t3;

}else if(t2 == "-"){

this.plusNums = +t1 - +t3;

}else if(t2 == "*"){

this.plusNums = +t1 * +t3;

}else if(t2 == "/"){

this.plusNums = +t1 / +t3;

}



  alert("we did it...the result is: "+this.plusNums);

}

}
