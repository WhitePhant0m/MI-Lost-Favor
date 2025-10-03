/**
 * Adds a Hexerei pestle_and_mortar recipe and optionally removes existing recipes for the same output.
 *
 * Usage notes:
 *  - `event` is the KubeJS recipe event object (passed by the script environment).
 *  - `args` is an object with the following properties:
 *      - ingredients: Array — list of ingredient objects as expected by Hexerei (e.g. [{ item: 'minecraft:nether_wart' }, { item: 'minecraft:bone_meal', count: 2 }]).
 *      - output: String — namespaced item id for the output (e.g. 'mod:powder').
 *      - amount: Number (optional) — how many items to produce; defaults to 1.
 *      - grindingTime: Number (optional) — recipe grinding time; defaults to 20.
 *      - removeRecipe: Boolean (optional) — if strictly `true` the function will remove existing recipes that produce the same output before adding the custom one.
 */
const customPestleAndMortarCraft = (event, args) => {
    event.custom({
        "type": "hexerei:pestle_and_mortar",
        "ingredients": args.ingredients,
        "output": {
            "id": args.output,
            "count": args.amount || 1
        },
        "grindingTime": args.grindingTime || 20
    });
    if (args.removeRecipe === true) {
        event.remove({ output: args.output });
    }
};


ServerEvents.recipes(event => {

    //For future

})