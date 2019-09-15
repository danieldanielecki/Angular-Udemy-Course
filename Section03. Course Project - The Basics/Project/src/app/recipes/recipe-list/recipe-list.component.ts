import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // Array of recipes.
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://assets-jpcust.jwpsrv.com/thumbs/tjNwoclK-720.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'http://assets-jpcust.jwpsrv.com/thumbs/tjNwoclK-720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
