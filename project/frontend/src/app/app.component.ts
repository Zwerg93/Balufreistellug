import {Component} from '@angular/core';
import {StreetModel} from "./models/street.model";
import {HttpService} from "./service/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchString?: string;
  result?: StreetModel;


  constructor(private http: HttpService) {
  }


  test() {


    this.http.getStreetsPerName(this.searchString!).subscribe({
      next: data => {
        console.log(data)
      },
      error: err => {
        console.log("erros")
      }

    })
  }

}
