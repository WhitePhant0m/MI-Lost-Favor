ServerEvents.recipes(event => {

    event.remove({ output: [
        "yo_hooks:gold_hook_head",
        "yo_hooks:diamond_hook_head",
        "yo_hooks:netherite_hook_head"
    ] })

});