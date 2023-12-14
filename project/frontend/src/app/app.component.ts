import {Component} from '@angular/core';
import {StreetModel} from "./models/street.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchString?: string;
  result?: StreetModel ;

  async test() {
    this.result = await fetch(
      "https://overpass-api.de/api/interpreter",
      {
        method: "POST",
        body: "data=" + encodeURIComponent(`[out:json][timeout:2500];
            area[name="${this.searchString}"]->.searchArea;
            (
              way["highway"]["name"](area.searchArea);
            );
            for (t["name"])
            {
              make street name=_.val;
              out;
            }`)
      },
    ).then(
      (data) => data.json()
    );

    //console.log(JSON.stringify(result, null, 2));
    console.table(this.result)//console.log(result)
    //this.result = result
  }
}
