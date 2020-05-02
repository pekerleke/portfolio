import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {
  data;
  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getDataProjects();
    console.log(this.data);
  }

}
