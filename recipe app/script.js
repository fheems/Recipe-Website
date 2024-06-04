const recipes = [
    /* list food items below with picture: */
    {
        id: 1,
        title: "Pancakes",
        image: "images/pancake.jpeg",
        ingredients: ["flour", "milk", "eggs"],
        mealType: "breakfast",
        instructions:  `
        1. In a large bowl, whisk together the flour, sugar, baking powder, and salt.
        2. In another bowl, beat the egg and then whisk in the milk, melted butter, and vanilla extract.
        3. Pour the wet ingredients into the dry ingredients and stir until just combined (do not overmix).
        4. Heat a non-stick skillet or griddle over medium heat and lightly grease it with butter or oil.
        5. Pour 1/4 cup of batter onto the skillet for each pancake. Cook until bubbles form on the surface and the edges look set, about 2-3 minutes.
        6. Flip the pancakes and cook for another 1-2 minutes, until golden brown.
        7. Serve warm with your favorite toppings like maple syrup, fresh fruit, or whipped cream.
        `
    },
       
    {
        id: 2,
        title: "Spaghetti Bolognese",
        image: "images/spag.jpeg",
        ingredients: ["200g spaghetti",
        "1 tbsp olive oil",
        "1 onion, chopped",
        "2 garlic cloves, minced",
        "250g ground beef",
        "400g can tomatoes",
        "2 tbsp tomato paste",
        "1 tsp dried oregano",
        "Salt and pepper"],
        mealType: "lunch",
        instructions: `
        1. Cook spaghetti according to package instructions.
        2. Heat oil, sauté onion and garlic.
        3. Add ground beef, cook until browned.
        4. Stir in tomatoes, tomato paste, and oregano. Simmer 15 minutes.
        5. Season with salt and pepper.
        6. Serve sauce over spaghetti.
        `
    },
    {
        id: 3,
        title: "Grilled Chicken",
        image: "images/grilled.jpeg",
        ingredients: [ "4 chicken breasts",
        "2 tbsp olive oil",
        "1 lemon, juiced",
        "1 tsp paprika",
        "Salt and pepper"],
        mealType: "dinner",
        instructions: `
        1. Marinate chicken in oil, lemon juice, paprika, salt, and pepper.
        2. Grill chicken over medium heat until fully cooked.
        `
    },
    {
        id: 4,
        title: "Cheese Omelette ",
        image: "images/cheese omellete.jpeg",
        ingredients: [ "2 eggs",
        "2 tbsp milk",
        "Salt and pepper",
        "1/4 cup shredded cheese",
        "1 tbsp butter"],
        mealType: "breakfast",
        instructions: 
        `
        1. Beat eggs, milk, salt, and pepper.
        2. Pour into a heated, buttered skillet.
        3. Cook until almost set, add cheese, fold, and cook until cheese melts.
        `
    },
    {
        id: 5,
        title: "Egg And Cheese Muffin",
        image: "images/egg mcmuffin.jpeg",
        ingredients: [ "1 English muffin",
        "1 egg",
        "1 slice of cheese",
        "1 tsp butter"],
        mealType: "breakfast",
        instructions:  `
        1. Toast the muffin, cook the egg.
        2. Assemble with cheese and butter.
        `
    },
    {
        id: 6,
        title: "Scrambled Egg With Toast",
        image: "images/scrambled egg.jpeg",
        ingredients: [
            "2 eggs",
            "2 tbsp milk",
            "Salt and pepper",
            "1 tbsp butter",
            "2 slices of bread"
        ],
        mealType: "breakfast",
        instructions: `
        1. Beat eggs with milk, salt, and pepper.
        2. Scramble in a buttered pan until cooked through.
        3. Serve on toasted bread.
        `
    },
    {
        id: 7,
        title: "French Toast",
        image: "images/french toast.jpeg",
        ingredients: ["2 slices of bread",
        "2 eggs",
        "1/2 cup milk",
        "1 tsp cinnamon",
        "1 tsp vanilla",
        "Butter"],
        mealType: "breakfast",
        instructions: `
        1. Whisk eggs, milk, cinnamon, and vanilla.
        2. Dip bread in mixture, cook on a buttered skillet until golden brown.
        `
    },
    {
        id: 8,
        title: "Chocolate Sandwich",
        image: "images/chocolate sandwich.jpg",
        ingredients: [
            "2 slices of bread",
            "1 tbsp butter",
            "50g chocolate, chopped"
        ],
        mealType: "breakfast",
        instructions: `
        1. Butter bread slices, place chocolate between them.
        2. Toast in a pan until chocolate is melted.
        `
     },
    {
        id: 9,
        title: "Chicken Nuggets",
        image: "images/nuggets.jpeg",
        ingredients: [
            "500g chicken breast, cubed",
            "1 cup breadcrumbs",
            "1/2 cup flour",
            "2 eggs",
            "Salt and pepper",
            "Oil for frying"
        ],
        mealType: "lunch",
        instructions:  `
        1. Coat chicken in flour, dip in beaten eggs, and cover with breadcrumbs.
        2. Fry in hot oil until golden and cooked through.
        `
    },
    {
        id: 10,
        title: "Pizza",
        image: "images/pizza.jpeg",
        ingredients: [ "Pizza dough",
        "1/2 cup pizza sauce",
        "1 cup shredded mozzarella",
        "Toppings of choice"],
        mealType: "lunch",
        instructions: `
        1. Spread sauce on dough, add cheese and toppings.
        2. Bake at 220°C (425°F) for 15-20 minutes.
        `
    },
    {
        id: 11,
        title: "Macaroni And Cheese",
        image: "images/macroni cheese.jpeg",
        ingredients: [
            "2 cups macaroni",
            "2 cups shredded cheese",
            "1 cup milk",
            "2 tbsp butter",
            "2 tbsp flour",
            "Salt and pepper"
        ],
        mealType: "lunch",
        instructions: `
        1. Cook macaroni according to package instructions.
        2. In a saucepan, melt butter, stir in flour, and cook for 1 minute.
        3. Gradually add milk, stirring until thickened.
        4. Add cheese, stir until melted, and combine with macaroni.
        `
   },
    {
        id: 12,
        title: "Fish Fingers",
        image: "images/fish fingers.jpeg",
        ingredients: [ "400g white fish fillets",
        "1 cup breadcrumbs",
        "1/2 cup flour",
        "2 eggs",
        "Salt and pepper",
        "Oil for frying"],
        mealType: "lunch",
        instructions: 
        `
        1. Cut fish into strips.
        2. Coat with flour, dip in beaten eggs, and cover with breadcrumbs.
        3. Fry in hot oil until golden and cooked through.
        `
    },
    {
        id: 13,
        title: "Egg Sandwich",
        image: "images/egg sandwich.jpeg",
        ingredients: ["2 slices of bread",
        "2 eggs",
        "1 tbsp mayonnaise",
        "Salt and pepper",
        "Lettuce"],
        mealType: "lunch",
        instructions:  `
        1. Boil eggs, mash with mayonnaise, salt, and pepper.
        2. Spread on bread, add lettuce, and assemble sandwich.
        `
    },
    {
        id: 14,
        title: "Chicken Biryani",
        image: "images/chicken b.jpeg",
        ingredients: ["500g chicken",
        "2 cups basmati rice",
        "1 onion, sliced",
        "2 tomatoes, chopped",
        "1 cup yogurt",
        "2 tbsp biryani masala",
        "1 tsp turmeric",
        "Salt and pepper",
        "Fresh cilantro",
        "Oil"],
        mealType: "dinner",
        instructions: `
        1. Marinate chicken in yogurt, turmeric, and biryani masala.
        2. Cook onions in oil until golden, add chicken, and cook until done.
        3. Layer cooked chicken with rice, tomatoes, and cilantro.
        4. Simmer until rice is fully cooked.
        `
    },
    {
        id: 15,
        title: "Lamb Biryani",
        image: "images/lamb.jpeg",
        ingredients: [
            "500g lamb",
            "2 cups basmati rice",
            "1 onion, sliced",
            "2 tomatoes, chopped",
            "1 cup yogurt",
            "2 tbsp biryani masala",
            "1 tsp turmeric",
            "Salt and pepper",
            "Fresh cilantro",
            "Oil"
        ],
        mealType: "dinner",
        instructions: `
        1. Marinate lamb in yogurt, turmeric, and biryani masala.
        2. Cook onions in oil until golden, add lamb, and cook until done.
        3. Layer cooked lamb with rice, tomatoes, and cilantro.
        4. Simmer until rice is fully cooked.
        `
    },
    {
        id: 16,
        title: "Butter Chicken",
        image: "images/butter.jpeg",
        ingredients: ["500g chicken breast, cubed",
        "2 tbsp butter",
        "1 onion, chopped",
        "2 garlic cloves, minced",
        "1 cup tomato sauce",
        "1/2 cup heavy cream",
        "1 tsp garam masala",
        "Salt and pepper"],
        mealType: "dinner",
        instructions: `
        1. Cook onion and garlic in butter.
        2. Add chicken and spices, cook until browned.
        3. Stir in tomato sauce and cream, simmer until cooked through.
        `
    },
    {
        id: 17,
        title: "Roast Chicken",
        image: "images/roast.jpeg",
        ingredients: [
            "1 whole chicken",
            "2 tbsp olive oil",
            "1 lemon, halved",
            "2 garlic cloves",
            "Fresh rosemary",
            "Salt and pepper"
        ],
        mealType: "dinner",
        instructions: `
        1. Preheat oven to 200°C (400°F).
        2. Season chicken with oil, lemon, garlic, rosemary, salt, and pepper.
        3. Roast for 1.5 hours or until fully cooked.
        `
    },
    {
        id: 18,
        title: "Chinese Chicken And Rice",
        image: "images/chinese.jpeg",
        ingredients: [
            "200g chicken breast, sliced",
            "2 cups cooked rice",
            "1 bell pepper, sliced",
            "1 carrot, julienned",
            "2 tbsp soy sauce",
            "1 tbsp oyster sauce",
            "1 tsp sesame oil",
            "1 garlic clove, minced",
            "Oil"
        ],
        mealType: "dinner",
        instructions: `
        1. Stir-fry chicken in oil with garlic.
        2. Add vegetables and cook until tender.
        3. Stir in rice, soy sauce, oyster sauce, and sesame oil.
        `
    },



];


const recipeContainer = document.getElementById("recipe-container");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");
/* css style for main below */
function displayRecipes(recipesToDisplay) {
    recipeContainer.innerHTML = "";
    recipesToDisplay.forEach(recipe => {
        const recipeElement = document.createElement("div");
        recipeElement.classList.add("recipe-item");
        recipeElement.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;
        recipeContainer.appendChild(recipeElement);
    });
}

function filterRecipes() {
    const searchTerm = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;

    const filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchTerm) || 
                              recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm));
        const matchesFilter = filterValue === "all" || recipe.mealType === filterValue;

        return matchesSearch && matchesFilter;
    });

    displayRecipes(filteredRecipes);
}

searchInput.addEventListener("input", filterRecipes);
filterSelect.addEventListener("change", filterRecipes);

// Display all recipes initially
displayRecipes(recipes);
