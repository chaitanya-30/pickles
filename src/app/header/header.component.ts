import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { pickle } from '../shared/model/pickle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchItem: string;
  wishlisted: pickle[] = [];
  cartlength:number;
  wishlistedlength:number;
  constructor(private router:Router,private datas:DataService) { 
    this.cartlength=0;
    this.wishlistedlength=0;
    
  }

  ngOnInit(): void {
  this.wishlisted=this.datas.wishlisted;
  }
  searchitems() {
    if (this.searchItem) {
      this.router.navigate(['/product/' + this.searchItem]);
    }

  }
  showwishlistitems(){
    this.wishlisted=this.datas.wishlisted;
    console.log(this.wishlisted);
    if(this.wishlisted){
      this.router.navigate(['/fav']);
        
    }else{
      alert("please add items to wishlist")
    }
  }
  ngAfterContentChecked(){
    if(this.datas.cartItems ){
   this.cartlength=this.datas.cartItems.length;}
   if(this.datas.wishlisted){
this.wishlistedlength=this.datas.wishlisted.length;
    }
  }
  opencart(){
    this.router.navigate(['/cart']);
  }
 
}
