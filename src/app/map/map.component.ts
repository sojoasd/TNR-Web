import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  title: string = "Angular4 AGM Demo";
  lat: number = 24.1504536;
  lng: number = 120.68325279999999;
  zoomValue: number = 15;
  iconUrl: string = 'http://i.imgur.com/0TctIfY.png';

  isOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  public markerClick(e) {
    console.log(e);
    e.open();
    this.isOpen = true;
  }
}
