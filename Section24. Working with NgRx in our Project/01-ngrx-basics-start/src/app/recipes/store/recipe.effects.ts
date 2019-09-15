import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store } from "@ngrx/store";
import * as RecipeActions from '../store/recipe.actions';
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Recipe } from "../recipe.model";
import { Injectable } from "@angular/core";
import * as fromRecipe from '../store/recipe.reducers';

@Injectable()
export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .pipe(switchMap((action: RecipeActions.FetchRecipes) => {
        return this.httpClient.get<Recipe[]>('https://ng-recipe-book-1a5ac.firebaseio.com/recipes.json', {
          observe: 'body',
          responseType: 'json'
        })
    }), map(
      (recipes) => {
        console.log(recipes);
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return {
          type: RecipeActions.SET_RECIPES,
          payload: recipes
        };
      }
    ))

  @Effect({dispatch: false}) // We don't want to do anything after this, so dispatch: false.
  recipeStore = this.actions$
    .ofType(RecipeActions.STORE_RECIPES)
    .pipe(withLatestFrom(this.store.select('recipes')), 
      switchMap(([action, state]) => {
        const req = new HttpRequest('PUT', 'https://ng-recipe-book-1a5ac.firebaseio.com/recipes.json', state.recipes, {reportProgress: true});
        return this.httpClient.request(req);
    }))

  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<fromRecipe.FeatureState>) {}
}
