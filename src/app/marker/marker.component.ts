import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-marker",
  templateUrl: "./marker.component.html",
  styleUrls: ["./marker.component.css"]
})
export class MarkerComponent implements OnInit {
  @Input() marker;

  isOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  public markerClick(e) {
    console.log(e);
    e.open();
    this.isOpen = true;
  }
}
