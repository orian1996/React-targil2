
function Recipe(props) {
    const recipe = props.recipe;
    const btnTXT = props.btnTXT;
    const Cliked = props.Cliked;
    const btn =props.btn;
    return (
        <div class="col-3 card" style={{margin: "20px 10px", padding:"10px"}}>
            <h3>{recipe.name}</h3>
            <p>{recipe.cookingMethod}</p>
            <img style={{
                width: "150px", height: "150px", margin:"auto"  }} 
            src={recipe.img} alt="" /><br></br>
            <button type="button" class={btn} onClick={() => Cliked(recipe)}>{btnTXT} </button>
        </div>

    )
}
export default Recipe;


