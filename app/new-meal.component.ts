
import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Enter a meal with the following details:</h3>
    <input placeholder="Name of meal" class="col-sm-8 input-lg" #newName>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <input placeholder="Calorie count" class="col-sm-8 input-lg" #newCalorieCount>
    <button (click)="addMeal(newName, newDescription, newCalorieCount)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDescription: HTMLInputElement, userCalorieCount: HTMLInputElement){
    console.log(userCalorieCount.value);
    var newMeal = new Meal(userName.value, userDescription.value, parseInt(userCalorieCount.value));
    console.log(newMeal);
    this.onSubmitNewMeal.emit(newMeal);
    userName.value = "";
    userDescription.value = "";
    userCalorieCount.value = "";
  }
}
