import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-cell",
  templateUrl: "./cell.component.html",
  styleUrls: ["./cell.component.sass"]
})
export class CellComponent implements OnInit {
  @Input() isActive: boolean = false;
  @Input() color: boolean = false;

  queen: String = "♕";

  constructor() {}

  ngOnInit() {}
}
