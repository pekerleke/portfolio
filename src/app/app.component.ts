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

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    document.getElementById('loader').style.display = 'none';
  }
}
