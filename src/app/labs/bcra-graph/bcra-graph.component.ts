import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bcra-graph',
  templateUrl: './bcra-graph.component.html',
  styleUrls: ['./bcra-graph.component.scss']
})
export class BcraGraphComponent implements OnInit {
  token = 'hhh';

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.getData()
          .subscribe((data: any) => {
            console.log(data);
          });
  }

  getData() {
    // Access-Control-Allow-Origin: *
    // tslint:disable-next-line: max-line-length
    //return this.http.get('https://api.twitter.com/1.1/search/tweets.json', { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'}) });
     return this.http.get('https://api.mercadolibre.com/trends/MLA');
  }
}