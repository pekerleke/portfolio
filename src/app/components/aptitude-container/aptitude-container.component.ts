import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aptitude-container',
  templateUrl: './aptitude-container.component.html',
  styleUrls: ['./aptitude-container.component.scss']
})
export class AptitudeContainerComponent implements OnInit {
  data;
  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getDataAptitudes();
  }

}
