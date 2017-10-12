import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  info =
  [{email:"Bill@gates.com",importance:true,subject: 'New Windows',content:'Windows XI will launch in year 2100'},
  {email:"AD@gates.com",importance:true,subject: 'Programming',content:'Enchantreeelslslkdsjlkfljdlkfjdsl;'},
  {email:"Josel@gates.com",importance:false,subject: 'Updated Algo',content:'New algorithm'},
  {email:"Gage@gates.com",importance:false,subject: 'Hl3!',content:'Just kidding..'}]
}
