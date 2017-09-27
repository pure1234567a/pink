export class CostModel {
    lamunphan:Rates2 = new Rates2();
    thaipost:Rates2 = new Rates2();
     
 }
 export class Rates{
     name : string;
     description : string;
     value : string;
 }
 export class Rates2{
     rates:Array<Rates>
 }