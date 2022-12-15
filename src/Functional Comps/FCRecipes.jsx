
import Recipe from "./FCRecipe";

function Recipes(props) {
    const recipes = props.recipes;
    const btnTXT = props.btnTXT;
    const Cliked = props.Cliked;
    const btn = props.btn;

    const strRecipes = recipes.map((recipe) =>
        <Recipe btnTXT={btnTXT} btn={btn} Cliked={Cliked} key={recipe.id} recipe={recipe} />)

    return (
        <div>
            <div className="row">
                {strRecipes}
            </div>
        </div>
    )
}
export default Recipes;


