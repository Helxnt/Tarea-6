import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navaja Suiza', url: '/home', icon: 'home' },
    { title: 'Nombre Genero', url: '/gender', icon: 'transgender' },
    { title: 'Nombre Edad', url: '/age', icon: 'people' },
    { title: 'País', url: '/country', icon: 'map' },
    { title: 'Clima', url: '/clima', icon: 'cloudy-night' },
    { title: 'Acerca De', url: '/about', icon: 'alert' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
