import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../service/http.service";
import {StreetModel} from "../../models/street.model";

@Component({
  selector: 'app-search-street',
  templateUrl: './search-street.component.html',
  styleUrls: ['./search-street.component.scss']
})


export class SearchStreetComponent implements OnInit {

  searchString?: string;
  result: StreetModel[] = [];



  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
  }

  getStreetsPerName() {

    this.http.getStreetsPerName(this.searchString!).subscribe({
      next: data => {
        this.result = data.elements
      },
      error: err => {
        console.log("erros")
      }

    })

  }
}
