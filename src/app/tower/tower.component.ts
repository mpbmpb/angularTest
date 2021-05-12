import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.css']
})
export class TowerComponent implements OnInit {
  startValue = 5;
  height = 4;
  heightInput = 4;
  multResults = [0];
  divResults = [0];
  title = 'Tower Calculator';
  alert = false;

  constructor() {
    }

  ngOnInit(): void {
    this.calculate();
  }

  calculate(): void {
    if (this.heightInput >= 2) {
      this.alert = false;
      this.height = this.heightInput;
      this.multResults.splice(0, this.multResults.length);
      this.divResults.splice(0, this.divResults.length);
      var result = this.startValue;
      for (let i = 1; i <= this.height; i++)
      {
        this.multResults.push(result *= i);
      }
      for (let i = 1; i <= this.height; i++)
      {
        this.divResults.push(result /= i);
      }
    }
    else {
      this.alert = true;
    }
  }


}
