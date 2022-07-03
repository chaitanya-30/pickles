import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { pickle } from '../shared/model/pickle';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
wishlisted:pickle[]=[];
cartitems:pickle[]=[];
  constructor(private datas:DataService,private router:Router) { 
    this.wishlisted=datas.wishlisted;
  }

  ngOnInit(): void {
    console.log("init")
  }
  addtocart(Pickle:pickle){
    this.cartitems=this.datas.cartItems;
    this.cartitems.push(Pickle);
    this.datas.cartItems=this.cartitems;
    
    }
    openpickledesc(id: number) {
      this.datas.showpickledata = false;
  
      this.router.navigate(['pickledesc/' + id]);
  
    }
}
