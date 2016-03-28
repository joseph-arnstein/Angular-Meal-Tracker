import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component ({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="edit-form">
  <h3>Edit Description:</h3>
  <input [(ngModel)]="meal.description" class="col-sm-8 int-lg edit-form"/>
  <input [(ngModel)]="meal.calories" class="col-sm-8 int-lg edit-form"/>
  </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
