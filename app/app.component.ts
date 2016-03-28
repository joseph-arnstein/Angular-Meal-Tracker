import { Component } from 'angular2/core';
import { NewMealComponent } from './new-meal.component';
// import { ListMealComponent } from './list-meals.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [NewMealComponent],
  template: `
    <div class="container">
      <h1>Stand in text</h1>
      <meal-list *ngFor="#meal of meals"><h3>{{ meal.name }}</h3><ul><li>{{ meal.description }}</li><li>{{ meal.calories }}</li></ul></meal-list>
    </div>
    <new-meal (onSubmitNewMeal)="addMeal($event)"></new-meal>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor () {
    this.meals = [
      new Meal("hamburger", "it was delicious", 200),
      new Meal("cheeseburger", "also deliteful", 400)
    ];

  }
  addMeal(newMeal: Meal){
    this.meals.push(newMeal);
  }
}
