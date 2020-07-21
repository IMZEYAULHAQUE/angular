import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Mutton Bhuna', 'One of my favorite. Dont forget to eat just when cooked.', 'https://p0.pxfuel.com/preview/995/747/603/recipe-dish-lunch-nutrition.jpg'),
    new Recipe('Bihar Kabab', 'Very delicios and world famous food. Must try.', 'data:image/jpeg;base64,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')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}