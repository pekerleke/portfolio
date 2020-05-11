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
    // return this.http.get('https://cors-anywhere.herokuapp.com/https://api.estadisticasbcra.com/usd_of', { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'}) });
    return this.http.get('https://api.estadisticasbcra.com/usd_of',
                          { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*',
                                                      'Access-Control-Allow-Methods': 'GET,PUT,OPTIONS',
                                                      // tslint:disable-next-line: max-line-length
                                                      Authorization: 'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjA2OTA1ODMsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJtcnRuc2FsZW1AZ21haWwuY29tIn0.MI8huaRsiFeW26V_ZqMbnnApIYMAX0L_wM-mlYpK5WoPxk8tgljF7fdxn1BiPw9Ss0vwfehdC-nErSmK-qeeJA',
                                                      }) });
  }
}
