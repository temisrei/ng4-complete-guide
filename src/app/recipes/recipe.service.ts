import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('1st Test Recipe', 'This is simply a [first] test', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-04.jpg'),
    new Recipe('2nd Test Recipe', 'This is simply a [second] test', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-05.jpg')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
