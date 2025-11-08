//https://github.com/klikli-dev/occultism-kubejs/blob/version/1.21.1/runs/client/kubejs/server_scripts/example.js 

ServerEvents.recipes(event => {

    event.remove({output: "ars_elemental:curio_bag"})
    event.recipes.occultism.ritual(
        'ars_elemental:curio_bag',
        [
            "hexerei:infused_fabric",
            "hexerei:infused_fabric",
            "hexerei:infused_fabric",
            "enchanted:creeper_heart"
        ],
        '#c:chests',
        'occultism:craft_foliot'
    ).dummy("kubejs:craft_curio_bag")

});