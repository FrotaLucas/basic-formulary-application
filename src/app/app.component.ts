import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website-menu';
  name = '';
  vetor = ['Lucas', 'Birgitt','Teresa','Johanna'];
 add(){
  let n = this.name;
  this.vetor.push(n);
 };
 remove(i: number) {
  this.vetor.splice(i,1)
 }
}
