import { Component, OnInit } from '@angular/core';
import { Piatti } from './models/piatti.models';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Piatti';
  URL = "https://4200-paolocaruga-01angularem-33afiw5qw6l.ws-eu97.gitpod.io/";

  data: Piatti;
  Piatti: Observable<Piatti>;

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.Piatti = this.http.get<Piatti>(this.URL);
    this.Piatti.subscribe( d => { 
        this.data = d;
    });    
  }
}
