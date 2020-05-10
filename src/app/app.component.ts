import { Component, OnInit } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  year = new Date().getFullYear();
  style = 'light';

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    document.getElementById('loader').style.display = 'none';
  }

  toggleStyle() {
    if (this.style === 'light') {
      document.documentElement.style.setProperty('--body-color', '#444');
      document.documentElement.style.setProperty('--background-color', '#222');
      document.documentElement.style.setProperty('--text-color', '#fff');
      document.documentElement.style.setProperty('--main-color', '#2787b0');
      document.documentElement.style.setProperty('--secondary-color', '#3db78f');
      document.documentElement.style.setProperty('--secondary-text-color', '#ccc');
      this.style = 'dark';
    } else {
      document.documentElement.style.setProperty('--body-color', '#efefef');
      document.documentElement.style.setProperty('--background-color', '#fff');
      document.documentElement.style.setProperty('--text-color', '#444');
      document.documentElement.style.setProperty('--main-color', '#5C27B0');
      document.documentElement.style.setProperty('--secondary-color', '#3F51B5');
      document.documentElement.style.setProperty('--secondary-text-color', '#666');
      this.style = 'light';
    }
  }
}