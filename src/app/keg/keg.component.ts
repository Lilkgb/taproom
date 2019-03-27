import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg';
import { User } from '../keg';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css']
})
export class KegComponent implements OnInit {
  kegs: Keg [] = [
    new Keg('IPA', 1000, 124, 5, 0),
    new Keg('Corona', 3.5, 124, 3, 0),
    new Keg('Bud Light', 3.5, 124, 4, 0)
  ]
  user: User [] = [
    new User('username', 'password')
  ]
  constructor() { }

  ngOnInit() {
  }
  editKegs(clickedKeg){
    this.selectedKeg = clickedKeg;
  }
  discount(clickedKeg){
    this.discounts = clickedKeg;
  }

  showLogin = null;
  selectedKeg = null;
  button = null;
  newRegister = null;
  loginbtn = true;
  registerbtn = true;
  orderbtn = null;
  logoutbtn = null;
  regularPricing = true;
  discountPricing = null;
  discountButton = null;
  removeDiscount = null;

  loginButton(){
    this.showLogin = true;
    this.newRegister = false;
  }
  register(){
    this.newRegister = true;
    this.showLogin = false;
  }
  makeNewAccount(){
    if ((<HTMLInputElement>document.getElementById("newuser")).value === '' || (<HTMLInputElement>document.getElementById("newpass")).value === ''){alert("You have to type in something in both username and password. Come on now.")}
    else {
      let newName = (<HTMLInputElement>document.getElementById("newuser")).value;
      let newPass = (<HTMLInputElement>document.getElementById("newpass")).value;
      this.user.push(new User(newName, newPass));
      alert(`Thank you for making a new account. Your username is ${newName}.`)
      console.log(this.user);
    }
  }
  login(){
    for (let i=0; i<this.user.length; i++) {
      if((<HTMLInputElement>document.getElementById("username")).value === this.user[i].name && (<HTMLInputElement>document.getElementById("password")).value === this.user[i].password){
        this.button = true;
        this.showLogin = false;
        this.loginbtn = false;
        this.registerbtn = false;
        this.orderbtn = true;
        this.logoutbtn = true;
        this.discountButton = true;
      } else {}
    }
  }
  logout(){
    this.button = false;
    this.showLogin = true;
    this.loginbtn = true;
    this.registerbtn = true;
    this.orderbtn = false;
    this.logoutbtn = false;
    this.removeDiscount = null;
    this.discountButton = null;
  }
  levelColor(currentKeg){
    if(currentKeg.level >= 80){
      return "green";
    } else if(currentKeg.level >= 40 && currentKeg.level <= 80){
      return "yellow";
    } else {
      return "red";
    }
  }
  discountColor(currentKeg){
    if(currentKeg.discount > 1){
      return "pink"
    } else{}
  }

  sellGlass(currentKeg){
    currentKeg.level--
  }
  sellGrowler(currentKeg){
    currentKeg.level-=2
  }
  sellLargeGrowler(currentKeg){
    currentKeg.level-=4
  }

  refill(currentKeg){
    currentKeg.level = 124
  }
  discounts = null;

  sumbitDiscount(discounts){
    const amount = parseInt((<HTMLInputElement>document.getElementById("discountInput")).value) / 100;
    console.log(this.discounts)
    this.discounts.discount = this.discounts.price * amount;
    this.discounts = null;
    this.regularPricing = null;
    this.discountPricing = true;
    this.discountButton = null;
    this.removeDiscount = true;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
  removeDis(currentKeg){
    this.discountPricing = null;
    this.regularPricing = true;
    this.discountButton = true;
    this.removeDiscount = null;
  }
  orderSelected = null;

  orderKeg(){
    this.orderSelected = true;
  }

  orderNewKeg(){
  let name = (<HTMLInputElement>document.getElementById("name")).value;
  let abv = parseInt((<HTMLInputElement>document.getElementById("abv")).value);
  if(name === ''){
    this.orderSelected = false;
  }else {
    this.kegs.push(new Keg(name,abv,124, 0, 0))
    this.orderSelected = false;
    }
  }
}

const app = new KegComponent;
console.log(app.user)
