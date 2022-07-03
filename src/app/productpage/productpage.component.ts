import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { pickle } from '../shared/model/pickle';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  [x: string]: any;
  wishlisted: pickle[] = [];
  cartitems:pickle[]=[];
  picklesdata: any;
  sub:any;
@ViewChild('wish') input:ElementRef<HTMLInputElement>

  constructor(private datas:DataService,private router:Router,private actroute:ActivatedRoute,private renderer:Renderer2) {
    this.picklesdata = datas.picklesData;
    this.cartitems=this.datas.cartItems;
    this.sub=this.actroute.params.subscribe(params => {
      if (params['searchItem']) {
      
        this.picklesdata = this.datas.picklesData.filter((pickle: pickle) => {
          return pickle.name.toLowerCase().includes(params['searchItem'].toLowerCase());
        })
     
      } else {
        this.picklesdata = this.datas.picklesData;
      }

    })
   }

  ngOnInit(): void {
    console.log("product init");
     
  }
  openpickledesc(id: number) {
    this.datas.showpickledata = false;

    this.router.navigate(['pickledesc/' + id]);

  }
  
  addtowishlist(itempickle:pickle) {
itempickle.selected=true;
    this.wishlisted.push(itempickle);
   
    console.log(this.wishlisted);
    this.datas.wishlisted=this.wishlisted;
    // this.renderer.setStyle(this.input.nativeElement,'color','#fd76cb');

  }
  ngOnDestroy() {
    console.log("Component will be destroyed in product page");
    this.sub.unsubscribe();

}
addtocart(Pickle:pickle){
this.cartitems=this.datas.cartItems;
this.cartitems.push(Pickle);
this.datas.cartItems=this.cartitems;

}

}
