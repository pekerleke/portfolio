import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ml-trends',
  templateUrl: './ml-trends.component.html',
  styleUrls: ['./ml-trends.component.scss']
})
export class MlTrendsComponent implements OnInit {
  data: any;
  loading = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData()
        .subscribe((data: any) => {
          this.data = data;
          this.loading = false;
        });
  }

  getData() {
   return this.http.get('https://api.mercadolibre.com/trends/MLA');
  }

}
