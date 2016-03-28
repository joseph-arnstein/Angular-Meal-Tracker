import { Component } from 'angular2/core';
import { NewMealComponent } from './new-meal.component';
import { EditMealDetailsComponent } from './edit-meal.component';

// import { ListMealComponent } from './list-meals.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [NewMealComponent, EditMealDetailsComponent],
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  public meals: Meal[];
  public selectedMeal: Meal;
  constructor () {
    this.meals = [
    ];
  }
  clickMeal(meal: Meal){
    this.selectedMeal = meal;
  }
  addMeal(newMeal: Meal){
    this.meals.push(newMeal);
  }
}
