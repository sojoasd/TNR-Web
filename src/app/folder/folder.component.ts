import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-folder",
  templateUrl: "./folder.component.html",
  styleUrls: ["./folder.component.css"]
})
export class FolderComponent implements OnInit {
  @Input() folder;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToMap(folderId: string) {
    this.router.navigate(["/map", folderId]);
  }
}
