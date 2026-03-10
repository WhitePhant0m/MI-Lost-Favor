ServerEvents.recipes(event => {

    event.remove({output: [
        "roots:silver_ingot",
        "roots:silver_block",
        "roots:raw_silver_block",
        "occultism:silver_nugget",
        "roots:raw_silver",
        "roots:copper_nugget",
    ]})
    event.remove({id: "roots:copper_ingot_from_nuggets"})
    

})