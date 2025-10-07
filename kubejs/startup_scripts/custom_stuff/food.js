StartupEvents.registry('item', event => {
    event.create("steaming_iron_ingot").texture('custom_stuff:item/steaming_iron_ingot').food(food => {
        food
            .nutrition(4)
            .saturation(0)
            .effect('minecraft:nausea', 200, 0, 1)
            .effect('minecraft:darkness', 100, 0, 1)
            .alwaysEdible()
            .eaten(ctx => global.yumyum(ctx))
    })

})

global.yumyum = ctx => {
  ctx.player.setRemainingFireTicks(200)
}