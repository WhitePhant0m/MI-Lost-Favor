KubeJSTweaks.beforeRecipes(event =>{

    const disableByRecipeID = [
        "immersivepetroleum:arcfurnace/steel",
        "immersivepetroleum:refinery/phenol",
        "immersivepetroleum:refinery/gasoline",
        "immersivepetroleum:distillationtower/oil",
        "immersivepetroleum:distillationtower/kerosene",
        "immersivepetroleum:coking/petcoke",
        "immersivepetroleum:hydrotreater/sulfur_recovery",
        "immersivepetroleum:hydrotreater/lubricant_cracking",
        "immersivepetroleum:hydrotreater/naphtha_cracking",
    ]

    disableByRecipeID.forEach(id =>{
        event.disable(id)
    })
    

})