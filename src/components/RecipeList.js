import React, { Component } from "react";
import Recipe from "./Recipe";
export default class RecipeList extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 mt5 text-uppercase">
            <h1 className="text-center text-slanted ">RecipeList</h1>
          </div>
        </div>
        <div className="row">
          {recipes.map(recipe => (
            <Recipe key={recipe.recipe_id} recipe={recipe} recipes={recipes} />
          ))}
        </div>
      </div>
    );
  }
}
