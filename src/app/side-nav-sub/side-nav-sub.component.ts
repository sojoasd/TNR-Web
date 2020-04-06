import { Component, OnInit, Input, TemplateRef, ElementRef, ViewChild, Inject } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { MapComponent } from "../map/map.component";

@Component({
  selector: "app-side-nav-sub",
  templateUrl: "./side-nav-sub.component.html",
  styleUrls: ["./side-nav-sub.component.css", "../map/map.component.css"]
})
export class SideNavSubComponent implements OnInit {
  @Input() side;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, @Inject(MapComponent) private parent: MapComponent) {}

  ngOnInit() {}

  changeCenterPoint(fileId: string) {
    this.parent.changeCenterPoint(fileId);
  }

  import(fileId: string) {
    this.parent.import(fileId);
  }

  openModal(fileId: string) {
    this.parent.openModal(fileId);
  }

  delete(fileId: string) {
    this.parent.delete(fileId);
  }
}
