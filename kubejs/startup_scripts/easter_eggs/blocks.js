StartupEvents.registry('block', event => {

    event.create('saeta_plush', "cardinal").item(i => i.maxStackSize(1))
    .fullBlock(false)
    .renderType("cutout")
    .notSolid()
    .waterlogged()
    .soundType('wool')
    .box(4,0,4,12,12,12)

    event.create('kisuny_plush', "cardinal").item(i => i.maxStackSize(1))
    .fullBlock(false)
    .renderType("cutout")
    .notSolid()
    .waterlogged()
    .soundType('wool')
    .box(4,0,4,12,12,12)


})
