import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {

  fahrenheit: string = '';
  celsius: string = '';
  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  onCelsiusChange(searchValue: string): void {
    console.log(searchValue);
    let string = this.celsius;
    let num = Number(parseInt(string) * 9 / 5 + 32).toFixed(1);
    this.fahrenheit = num.toString();
  }

  onFahrenheitChange(searchValue: string): void {
    console.log(searchValue);
    let string = this.fahrenheit;
    let num = Number((parseInt(string)- 32) * 5 / 9).toFixed(1);
    this.celsius = num.toString();
  }

}