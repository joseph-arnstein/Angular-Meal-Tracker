import { Component } from 'angular2/core';
import { NewMealComponent } from './new-meal.component';
import { EditMealDetailsComponent } from './edit-meal.component';

// import { ListMealComponent } from './list-meals.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [NewMealComponent, EditMealDetailsComponent],
  template: `
    <div class="container">
      <h1>Stand in text</h1>
      <meal-list *ngFor="#meal of meals">
        <h3 (click)="clickMeal(meal)"
        [class.editBlue]="meal === selectedMeal">{{ meal.name }}</h3>
        <ul [class.show]="meal === selectedMeal">
          <li>{{ meal.description }}</li>
          <li>{{ meal.calories }}</li>
        </ul>
      </meal-list>
    </div>
    <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
    </edit-meal-details>
    <new-meal (onSubmitNewMeal)="addMeal($event)"></new-meal>
  `
})

export class AppComponent {
  public meals: Meal[];
  public selectedMeal: Meal;
  constructor () {
    this.meals = [
      new Meal("hamburger", "it was delicious", 200),
      new Meal("cheeseburger", "also delightful", 400)
    ];
  }
  clickMeal(meal: Meal){
    this.selectedMeal = meal;
  }
  addMeal(newMeal: Meal){
    this.meals.push(newMeal);
  }
}
