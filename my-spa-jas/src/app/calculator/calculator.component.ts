import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent {
  screen = '0';
  firstValue: number | any = null;
  action: string | null = null;

  numClick(val: { toString: () => string; }) {
    if (this.screen === '0') {
      this.screen = val.toString();
    } else {
      this.screen = `${this.screen}${val}`;
    }
  }

  oper(action: string | null): void {
    this.firstValue = parseInt(this.screen);
    this.action = action;
    this.screen = ' ';
  }

  calculadora() {
    debugger;
    const a = parseInt(this.firstValue);
    const b = parseFloat(this.screen);

    let result=0;
    if (this.action === 'r') {
      result = a * b;
    }
    else if (this.action === 's') {
      result = a / b;
    }
    else if (this.action === 'a') {
      result = a + b;
    }
    else if (this.action === 'j') {
      result = a - b;
    }

    this.firstValue = result;
    this.screen = result.toString();
  }
} 
