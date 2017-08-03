import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('1st Test Recipe', 'This is simply a [first] test', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-04.jpg'),
    new Recipe('2nd Test Recipe', 'This is simply a [second] test', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-05.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
