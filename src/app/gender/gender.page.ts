import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

  name:string="";
  gender:string="";
  img:string="";
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  Gender(){
    this.http.get("https://api.genderize.io/?name="+this.name).subscribe(data => {
      
    console.log(data["gender"]);

      if(data["gender"] == "male"){
        this.gender = "Masculino";
        this.img = "assets/azul.png";
      }else if(data["gender"] == "female"){
        this.gender = "Femenino";
        this.img = "assets/rosado.jpg";
      }
    })
  }

}
