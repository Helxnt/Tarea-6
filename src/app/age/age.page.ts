import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-age',
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage implements OnInit {

  name:string="";
  age:string="";
  img:string="";
  eres:string="";

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  Age(){
    this.http.get("https://api.agify.io/?name="+this.name).subscribe(data => {
      
    console.log(data["age"]);

      if(data["age"] < 17){
        this.age = data["age"];
        this.img = "assets/joven.jpeg";
        this.eres ="joven";

      }else if(data["age"] >=18 && data["age"]<60){
        this.age = data["age"];
        this.img = "assets/adulto.jpeg";
        this.eres ="adulto";

      }else if(data["age"] >=60){
        this.age = data["age"];
        this.img = "assets/anciano.jpeg";
        this.eres ="anciano";
      }

    })
  }

}
