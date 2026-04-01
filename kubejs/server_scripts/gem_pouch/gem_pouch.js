// let $MenuUtil = Java.loadClass("dev.shadowsoffire.placebo.menu.MenuUtil")
// let $SimplerMenuProvider = Java.loadClass("dev.shadowsoffire.placebo.menu.SimplerMenuProvider")
// let $ChunkPos = Java.loadClass("net.minecraft.world.level.ChunkPos")
// let $TicketType = Java.loadClass("net.minecraft.server.level.TicketType")
// let $GemCaseMenu = Java.loadClass("dev.shadowsoffire.apotheosis.socket.gem.storage.GemCaseMenu")
// let $ClientboundLevelChunkWithLightPacket = Java.loadClass("net.minecraft.network.protocol.game.ClientboundLevelChunkWithLightPacket")
// let $ClientboundBlockEntityDataPacket = Java.loadClass("net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket")
// let $BitSet = Java.loadClass("java.util.BitSet")


// ItemEvents.firstRightClicked("modern_industrialization:steel_rod", event => {
//     let player = event.player
//     let item = player.getMainHandItem()
//     if(player.isCrouching){
//         let block = event.target.block
//             if(block && block.getId() == "apotheosis:gem_case"){
//             let compound = $CompoundTag()
//             compound["putIntArray(java.lang.String,int[])"]("milf:gem_case_pos", [block.getPos().x, block.getPos().y, block.getPos().z])
//             item.set($DataComponents.CUSTOM_DATA, compound)
//         }
//     }
//     let compoundTagFromData = item.get($DataComponents.CUSTOM_DATA).copyTag()
    
//     if(compoundTagFromData.contains("milf:gem_case_pos")){
//         let posArray = compoundTagFromData.getIntArray("milf:gem_case_pos")
//         let blockPos = new BlockPos(posArray[0], posArray[1], posArray[2])
//         event.level.getChunkAt(blockPos)

//         //let menuProvider = blockState.getMenuProvider(event.level, blockPos)
//         // let changedProvider = new JavaAdapter($SimplerMenuProvider, {
//         //     createMenu(id, inventory, player) {
//         //         let originalMenu = menuProvider.createMenu(id, inv, player)

//         //         return new JavaAdapter($GemCaseMenu, {
//         //             stillValid(player){ return true }
//         //                 // removed(player) {
//         //                 //     let fakeBlockState = event.level.getBlockState(fakeBlockPos)
//         //                 //     event.level.setBlock(blockPos, fakeBlockState, 3)
//         //                 //     event.level.setBlock(fakeBlockPos, Blocks.AIR.defaultBlockState(), 3)
//         //                 // }
//         //         }, id, inventory, blockPos)
//         //     }
//         // }, event.level, blockPos, $MenuUtil.PosFactory())


//         //player.openMenu(menuProvider, blockPos)

//         let chunk = event.level.getChunk(blockPos)
//         let fakeBlockPos = new BlockPos(parseInt(event.player.position().x) ,parseInt(event.player.position().y), parseInt(event.player.position().z))

//         //event.level.setBlock(fakeBlockPos, blockState, 3)
//         //player.openMenu
//         event.level.getChunkSource().addRegionTicket($TicketType.PLAYER, chunk.pos, 2, chunk.pos)

//         let blockEntity = event.level.getBlockEntity(blockPos)
//         let blockState = event.level.getBlockState(blockPos)
//         if(!blockEntity) {
//             console.log("WHAT");
//             return
//         }


//         player.connection.send(new $ClientboundLevelChunkWithLightPacket(chunk, event.level.getLightEngine(), new $BitSet(), new $BitSet()))
//         player.connection.send($ClientboundBlockEntityDataPacket.create(blockEntity))




        

//         $MenuUtil.openGui(player, blockPos, function(id, inventory, blockPos) { 
//             let gemCaseMenuAdapter = new JavaAdapter($GemCaseMenu, {
//                 stillValid(player){ return true }
//             }, id, inventory, blockPos)

//             console.log(gemCaseMenuAdapter.tile);
            
            
//             return gemCaseMenuAdapter
//         })
//         event.level.getChunkSource().removeRegionTicket($TicketType.PLAYER, chunk.pos, 2, chunk.pos)


        

//         //$MenuUtil.openGui(player, blockPos, )
//     }

// })