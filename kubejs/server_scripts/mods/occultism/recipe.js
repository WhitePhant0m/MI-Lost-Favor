ServerEvents.recipes(event =>{
    event.replaceOutput({ output: 'occultism:netherite_dust' }, 'occultism:netherite_dust', 'modern_industrialization:netherite_dust')
})

KubeJSTweaks.beforeRecipes(event => {

    const disableByRecipeID = [
        "occultism:blasting/netherite_ingot_from_dust",
        "occultism:smelting/netherite_ingot_from_dust"
    ]

    disableByRecipeID.forEach(id => {
        event.disable(id)
    })


})