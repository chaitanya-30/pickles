import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { pickle } from '../shared/model/pickle';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  picklesdata: any;
  favdata: boolean = false;
  itempickle: pickle;
  searchItem: string;
  background = "green";
 
  private sub: any;

  constructor(private data: DataService, private router: Router, private actroute: ActivatedRoute) {
    // this.picklesdata = data.picklesData;
  }

  ngOnInit(): void {
   
  }




  redirect(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }
 shopnow(){
this.redirect('/product');
 }
  
  ngOnDestroy() {
    console.log("Component will be destroyed");
    // this.sub.unsubscribe();

}

}