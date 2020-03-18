import { Component, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-marker-modal",
  templateUrl: "./marker-modal.component.html",
  styleUrls: ["./marker-modal.component.css"]
})
export class MarkerModalComponent {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
