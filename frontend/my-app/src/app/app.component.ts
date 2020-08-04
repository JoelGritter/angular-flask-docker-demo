import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.makeRequest();
  }

  async makeRequest(){
    let response = await this.http.post('http://0.0.0.0:5000', {}).toPromise();

    console.log(response['text']);
  }
}
