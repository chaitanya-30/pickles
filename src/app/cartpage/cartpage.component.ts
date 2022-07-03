import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../shared/data.service';
import { pickle } from '../shared/model/pickle';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  grandTotal:number=0;
  totalweight:number=0;
  @ViewChild('pricedisplay') pr:ElementRef;

cartitems:pickle[]=[];
  changepr: Number;

  constructor(private datas:DataService) { 
    this.cartitems=this.datas.cartItems;

  }

  ngOnInit(): void {
   
  }
  ngAfterContentChecked(){
   
    
  }
  ngAfterContentInit(){
    console.log("content init");
    
  }

  deletecartitem(Pickle:pickle){
    this.cartitems=this.cartitems.filter( item => item.id!=Pickle.id);
    this.datas.cartItems=this.cartitems;
    // this.grandTotal=this.grandTotal-Pickle.price;
    // this.grandTotal=this.datas.gettotal(Pickle,'1kg');
  }
  
  changeprice(pekle, val: string) {
    this.grandTotal=this.datas.gettotal(pekle,val);

        }
  
  // gettotal():number {
  //    this.grandTotal = 0;
  //  this.cartitems.forEach(element => {
  //   this.grandTotal=this.grandTotal+element.price;
    
  //  });
  //   return this.grandTotal;
  // }

  // getprice(pickle, val) {
  //   let price;
  //   return price = ((pickle.price * parseInt(val)) / 1000)
  // }
  // changingPrice(price:number,pickleid:number):pickle{
  //   let cartitem=this.tempcartitems.find(item =>
  //     item.id===pickleid);
  //     if(!cartitem) return;
  //   cartitem.price=price;
  //   return cartitem;
  // }
}
