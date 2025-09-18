ServerEvents.recipes(event => {

    function ie_crusher_recipe(input,output,energy){
        energy = energy || 1600
        let recipe = {
            "type" : "immersiveengineering:crusher",
            "energy" : energy,
            "input" : input,
            "result" : {
                "count" : output[1],
                "id" : output[0]
            }
        }
        event.custom(recipe)
    }

    ie_crusher_recipe(
        {"item": "extendedae:entro_crystal"},
        ["extendedae:entro_dust" , 1]
    )

    ie_crusher_recipe(
        {"item": "advanced_ae:shattered_singularity"},
        ["advanced_ae:quantum_infused_dust" , 2]
    )

})