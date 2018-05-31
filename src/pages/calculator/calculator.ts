import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {

  inputNum = "";
  inputNum2 = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBack(){
    this.navCtrl.pop();
  }
  
  displayNum(type){
    var a = type;
    this.inputNum += a;
  }

  btnPlus(){
    this.inputNum2 = this.inputNum + " + ";
    this.inputNum = "";
  }

  btnMinus(){
    this.inputNum2 = this.inputNum + " - ";
    this.inputNum = "";
  }

  btnEqual(){
    var a = parseInt(this.inputNum2);
    // alert(this.inputNum2);
    var b = parseInt(this.inputNum);

    for(var i = 0 ; i <= this.inputNum2.length ; i++){
      if(this.inputNum2[i] == '+'){
        var plus = a+b;
        this.inputNum = String(plus);

        this.inputNum2 = "";

      }else if(this.inputNum2[i] == '-'){
        var minus = a-b;
        this.inputNum = String(minus);

        this.inputNum2 = "";
      }
    }    
  }  

  btnClear(){
    this.inputNum = "";
    this.inputNum2 = "";
  }

  btnDel(){

  }
}
