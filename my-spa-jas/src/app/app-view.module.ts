import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalculatorComponent } from "./calculator/calculator.component";
import { CardExampleComponent } from "./card-example/card-example.component";

const rutas:Routes = [
    { path: 'tarjeta', component: CardExampleComponent},
    { path: 'calculadora', component: CalculatorComponent}
  ]
  
@NgModule({
    declarations: [
        CardExampleComponent,
        CalculatorComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(rutas),
    ],
    exports:[RouterModule]
})
export class AppViewModule { }
