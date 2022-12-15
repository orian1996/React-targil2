
import React from "react";
import Recipes from "../Functional Comps/FCRecipes";



const MyRecipes = [
    { id: 1, name: "Pizza", time: "10 min", cookingMethod: "Oven", img: "https://static01.nyt.com/images/2014/04/09/dining/09JPPIZZA2/09JPPIZZA2-superJumbo-v3.jpg" },
    { id: 2, name: "Cake", time: "15 min", cookingMethod: "Baking", img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg " },
    { id: 3, name: "sushi", time: "8 min", cookingMethod: "Rooling", img: "https://www.happyfoodstube.com/wp-content/uploads/2016/03/homemade-sushi-image.jpg " }
];

export default class CCMyKitchen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: MyRecipes,
            madeRecipes: [],
            counter: MyRecipes.length
        }

    }
   
    Prepare = (recipe) => {
        let tempRecipes = [...this.state.recipes];                 
        tempRecipes = tempRecipes.filter(item => item.id !== recipe.id);  
        this.setState({ recipes: [...tempRecipes], madeRecipes: [...this.state.madeRecipes,recipe] })

    }
    Eat = (recipe) => {
        let tempMade = [...this.state.madeRecipes]
        tempMade = tempMade.filter(item => item.id !== recipe.id);
        this.setState({recipes:[...this.state.recipes,recipe], madeRecipes: [...tempMade] })
    }

    render() {
        return (

            <div>
                <h1>Recipes:</h1>
                <h3>Recipes Made: {this.state.recipes.length}</h3>               
                <Recipes btnTXT="Prepare dish!" btn={"btn btn-primary"} Cliked={this.Prepare} recipes={this.state.recipes} />
                <div className="row">
                    {this.state.recipes.length < 3 && <h1>Ready to eat!</h1>}
                    {this.state.recipes.length < 3 && <h3>Recipes Made:{this.state.madeRecipes.length}</h3>}
                    <Recipes btnTXT="Eat!" btn={"btn btn-warning"} Cliked={this.Eat} recipes={this.state.madeRecipes} />
                </div>
            </div>


        )


    }

}
