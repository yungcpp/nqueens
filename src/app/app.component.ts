import { Component } from "@angular/core";
import { solve } from "./solve";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  title = "nQueens";

  nums: number = 4;
  numbers: number[][];
  board: number = 0;

  selectedBoard(index: number) {
    if (this.numbers.length > index) {
      this.board = index;
    }
  }

  updateInput(str: string) {
    const value: number = parseInt(str);
    if (value < 4 || isNaN(value)) {
      this.nums = 1;
    } else {
      this.nums = value;
    }
  }

  submit(): void {
    this.numbers = solve(this.nums);
  }
}
