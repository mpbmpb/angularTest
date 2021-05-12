import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-ps-kw',
  templateUrl: './input-ps-kw.component.html',
  styleUrls: ['./input-ps-kw.component.css']
})
export class InputPsKwComponent implements OnInit {

  @Input() value = 0;
  @Output() valueChange = new EventEmitter();
  @Input() unit = 'KW';
  @Output() unitChange = new EventEmitter();

  private readonly oneKwIsPs = 1.3596216173;

  constructor() { }

  ngOnInit(): void {
  }

  onPowerChanged() {
    this.valueChange.emit(this.value);
  }

  onUnitChanged() {
    this.unitChange.emit(this.unit);
    if (this.unit === 'KW') {
      this.value *= this.oneKwIsPs;
    }
    if (this.unit === 'PS') {
      this.value /= this.oneKwIsPs;
    }

    this.valueChange.emit(this.value);
    this.unitChange.emit(this.unit);
  }

}
