let destructionPenMode = 0
let destructionPenAabb = AABB.CUBE
let destructionPenblockCount = 0
ItemEvents.firstRightClicked("kubejs:destruction_pen", event => {
    if(!event.getTarget()?.block.getPos()) return
    let blockpos = event.getTarget().block.getPos()
    switch (destructionPenMode) {
        case 0:
            destructionPenAabb = AABB.ofBlock(blockpos.offset(0,0,0))
            break;
        case 1:
            destructionPenAabb = destructionPenAabb.minmax(AABB.ofBlock(blockpos.offset(0,0,0)))
            event.player.tell(Text.info(`RMB to destroy, Shift+RMB to cancel`))
            break;
        case 2:
            if(event.player.crouching) break;
            destructionPenblockCount = 0
            console.log(`X:${destructionPenAabb.getXsize()},Y:${destructionPenAabb.getYsize()},Z:${destructionPenAabb.getZsize()}`)
            BlockPos.betweenClosedStream(destructionPenAabb.contract(0.01, 0.01, 0.01)).forEach((block) => {
                if(event.getLevel().getBlock(block).id == "minecraft:air") return;
                event.level.setBlockAndUpdate(event.getLevel().getBlock(block).getPos(), Blocks.AIR.defaultBlockState())
                destructionPenblockCount++
            });
            event.player.tell(Text.info(`${destructionPenblockCount} blocks destroyed`))
            break;
    }
    destructionPenMode ++
    destructionPenMode %= 3
})