let mode = 0
let aabb = AABB.CUBE

ItemEvents.firstRightClicked("kubejs:dev_pen", event => {
    if(!event.getTarget()?.block.getPos()) return
    let blockpos = event.getTarget().block.getPos()
    switch (mode) {
        case 0:
            aabb = AABB.ofBlock(blockpos.offset(0,1,0))
            break;
        case 1:
            aabb = aabb.minmax(AABB.ofBlock(blockpos.offset(0,-1,0)))
            break;
        case 2:
            let blockset = new Set()
            console.log(`X:${aabb.getXsize()},Y:${aabb.getYsize()},Z:${aabb.getZsize()}`)
            BlockPos.betweenClosedStream(aabb.contract(0.01, 0.01, 0.01)).forEach((block) => {
                let blockid = event.getLevel().getBlock(block).getId();
                blockset.add(blockid)
            });
            let blockKeyMap = {"minecraft:air" : " "}
            let symbols = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
            for(const block of blockset){
                if(blockKeyMap.hasOwnProperty(block) || block == "minecraft:air") continue
                blockKeyMap[block] = symbols.charAt(0)
                symbols = symbols.slice(1)
            }
            const cube = []
            for (let z = aabb.getMinPosition().z(); z < aabb.getMaxPosition().z(); z++) {
                let plane = []
                for (let y = aabb.getMinPosition().y(); y < aabb.getMaxPosition().y(); y++) {
                    let row = ""
                    for (let x = aabb.getMinPosition().x(); x < aabb.getMaxPosition().x(); x++) {
                        row = row + blockKeyMap[event.getLevel().getBlock(x,y,z).getId()]
                    }
                    plane.push(row)
                }
                cube.push(plane)
            }
            let keyBlockMap = {}
            for (const [key, value] of Object.entries(blockKeyMap)) {
                if(key == "minecraft:air") continue
                keyBlockMap[value] = key
            }
            console.log(cube.toString())
            console.log(JSON.stringify(keyBlockMap))
            event.player.tell(Text.info("Shape arrays").clickCopy(cube.toString()).hover('Click to copy shape arrays'))
            event.player.tell(Text.info("Shape keys").clickCopy(JSON.stringify(keyBlockMap)).hover('Click to copy key:id map'))
            break;
    }
    mode++
    mode %= 3
})

