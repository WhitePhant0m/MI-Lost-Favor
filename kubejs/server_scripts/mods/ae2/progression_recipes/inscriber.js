ServerEvents.recipes(event => {

    var tier1token = "kubejs:mysterious_disk"
    var tier2token = "kubejs:storage_disk"
    var tier3token = "kubejs:automation_disk"
    var tier4token = "kubejs:quantum_disk"


    function inscriber_recipe(output,bottom,middle,top){
        let recipe = { 
            "type": "ae2:inscriber",
            "ingredients": {},
            "mode" : "incribe"
        }
        recipe.result = output[0]
        recipe.result.count = output[1]
        recipe.ingredients.bottom = bottom
        recipe.ingredients.middle = middle
        recipe.ingredients.top = top
        event.custom(recipe)
    }

    inscriber_recipe([{"id": tier1token}],{"item": "kubejs:storage_blueprint"},{"item": "kubejs:cd"},{"tag": "c:dusts/certus_quartz"})
    inscriber_recipe([{"id": tier2token}],{"item": "kubejs:automation_blueprint"},{"item": "kubejs:cd"},{"tag": "c:dusts/fluix"})
    inscriber_recipe([{"id": tier3token}],{"item": "kubejs:quantum_blueprint"},{"item": "kubejs:cd"},{"tag": "c:dusts/shattered_singularity"})
    inscriber_recipe([{"id": tier4token}],{"item": "kubejs:divine_blueprint"},{"item": "kubejs:cd"},{"tag": "c:dusts/entro"})


})