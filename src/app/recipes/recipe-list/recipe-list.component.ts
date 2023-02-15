import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://data.thefeedfeed.com/static/2019/06/14/15605265545d03beda5eb6f.JPG'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
