import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lets join us';
  name: any = ' ';
  vetor = ['Lucas', 'Birgitt', 'Teresa', 'Johanna'];
  showH1: boolean = false;
  // showError: boolean = false;
  content: string = '';

  add() {
    let n = this.name;

    if (n !== ' ') {
      this.vetor.push(n);
      this.content = 'welcome ' + n + ' =)';
      this.showH1 = true;
      // this.showError = false;
      setTimeout(() => {
        this.showH1 = false;
      }, 2000);
    } else {
      this.content = 'name required !';
      // this.showError = true;
      this.showH1 = true;
      setTimeout(() => {
        this.showH1 = false;
      }, 2000);
    }
  }

  remove(i: number) {
    this.vetor.splice(i, 1);
  }
}
