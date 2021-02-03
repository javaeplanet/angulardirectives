import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

courses:string[];
students:object[];

  constructor() { 

   this.courses=[
"java","php","python"
    ];

    this.students=[{id:"1",name:"anish"},{id:2,name:"ravi"}];
  }

  ngOnInit(): void {
  }

}
