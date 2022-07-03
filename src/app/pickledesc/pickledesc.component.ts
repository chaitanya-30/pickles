import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { pickle } from '../shared/model/pickle';


@Component({
  selector: 'app-pickledesc',
  templateUrl: './pickledesc.component.html',
  styleUrls: ['./pickledesc.component.css']
})
export class PickledescComponent implements OnInit {
  display="visible";
  pickle:pickle;
  picklesdata:any;
  constructor(private router:Router,private actroute:ActivatedRoute,private datas:DataService) { 
  this.picklesdata=datas.picklesData;
  }

  ngOnInit(): void {
    this.display="visible";
    let pickleid=this.actroute.snapshot.paramMap.get('id');
    this.pickle=this.picklesdata.find( pi => pi.id==pickleid);
    console.log(this.pickle);
  }
  closedisplay(){
    this.display="none";
    this.router.navigate(['/product']);
  }
}
