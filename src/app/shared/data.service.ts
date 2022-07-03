import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';
import { pickle } from './model/pickle';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  showpickledata: boolean = true;
  wishlisted:pickle[];
  cartItems:pickle[]=[];

  tempcartitems:pickle[]=[];
  constructor() { }
  picklesData = [
    { id:1,
      name: "Mixed Vegetable",
      imgurl: '/assets/images/pickle1.jpg',
      price: 250,
      agprice:250,
      selected:false
    },
    {id:2,
      name: "Mango",
      imgurl: '/assets/images/pickle2.jpg',
      price: 150,
      agprice:150,
      selected:false

    },

    {id:3,
      name: "Garlic",
      imgurl: '/assets/images/pickle3.jpg',
      price: 300,
      agprice:300,
      selected:false

    },

    {id:4,
      name: "Avakaya",
      imgurl: '/assets/images/pickle4.jpg',
      price: 100,
      agprice:100,
      selected:false

    },

    {id:5,
      name: "Avakaya Garlic",
      imgurl: '/assets/images/pickle5.jpg',
      price: 400,
      agprice:400,
      selected:false

    },

    {id:6,
      name: "cucumber pickle",
      imgurl: '/assets/images/pickle6.jpg',
      price: 200,
      agprice:200,
      selected:false

    },
    {id:7,
      name: "Gongura pickle",
      imgurl: '/assets/images/pickle7.jpg',
      price: 300,
      agprice:300,
      selected:false

    },
    {id:8,
      name: "prawn pickle",
      imgurl: '/assets/images/pickle8.jpg',
      price: 100,
      agprice:100,
      selected:false

    },
    {id:9,
      name: "Ginger Avakaya",
      imgurl: '/assets/images/pickle9.jpg',
      price: 200,
      agprice:200,
      selected:false

    }

  ]
  gettotal(pekle:pickle,val:string):number{

    let pkl:pickle=pekle;
    if (parseInt(val) == 1) {
            val = '1000';
      
          }
    console.log(this.tempcartitems);
    if (this.tempcartitems.length == 0) {
      pkl.price = ((pkl.agprice * parseInt(val)) / 1000);
      this.tempcartitems.push(pkl);
      console.log("hello");
    } else {
      let item= this.tempcartitems.find(element => {
        return element.id == pekle.id});
        if(item){
        item.price = ((pkl.agprice * parseInt(val)) / 1000)
      }else{
             pkl.price = ((pkl.agprice * parseInt(val)) / 1000);
        this.tempcartitems.push(pkl);
      }
      

      console.log("hello1");
      console.log(this.tempcartitems);
    }


  


let grandTotal = 0;
this.tempcartitems.forEach(element => {
  console.log(element.price);
 grandTotal=grandTotal+element.price;
 
});
 return grandTotal;




  }


  // changingPrice(price:number,pickleid:number){
  //   let cartitem=this.cartItems.find(item =>
  //     item.id===pickleid);
  //     if(!cartitem) return;
  //     cartitem.price=price;
  // }
}
