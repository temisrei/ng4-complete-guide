import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe(
      'Fluffy Oven Scrambled Eggs',
      'READY IN: 30mins',
      'http://img.sndimg.com/food/image/upload/h_420,w_560,c_fit/v1/img/recipes/11/80/47/picB131a6.jpg',
      [
        new Ingredient('melted butter', 0.25),
        new Ingredient('eggs', 12),
        new Ingredient('salt', 1),
        new Ingredient('milk', 1.25)
      ]
    ),
    new Recipe(
      'Substitute for Mascarpone Cheese',
      'READY IN: 5mins',
      'http://img.sndimg.com/food/image/upload/h_420,w_560,c_fit/v1/img/recipes/28/62/0/pic7NCTfb.jpg',
      [
        new Ingredient('cream cheese', 16),
        new Ingredient('sour cream', 0.33),
        new Ingredient('heavy whipping cream', 0.25)
      ]
    )
  ];

  constructor(private shoppingListSvc: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListSvc.addIngredients(ingredients);
  }

}
