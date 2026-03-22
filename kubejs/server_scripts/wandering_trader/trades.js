// let $RandomSource = Java.loadClass("net.minecraft.util.RandomSource")
// let $VillagerTrades = Java.loadClass("net.minecraft.world.entity.npc.VillagerTrades")

// console.log($VillagerTrades.ItemListing);


// NativeEvents.onEvent("net.neoforged.neoforge.event.village.WandererTradesEvent", event =>{


//     let genericTrades =event.getGenericTrades()
//     let rareTrades = event.getRareTrades()

//     genericTrades.forEach(trade => {
//         try {
//             let offer = trade.getOffer(null, $RandomSource.create())
//             console.log(offer)


//         } catch (error) {
//             console.log(error);
            
//         }
        
        
//     })
//     // if(event.getType() == $VillagerTrades.Type.WANDERING_TRADER){
//     //     // for(let trades of event.getTrades().values()){
//     //     //     for(let trade of trades){
//     //     //         console.log(trade);
                
//     //     //     }
//     //     // }

//     //     console.log("WWWW");
        

//     // }
// })


MoreJS.updateOffer(event =>{

    if (!event.isWanderer()) return
    event.offer.replaceEmeralds(Item.of("devices:gold_coin"))

})

// MoreJS.wandererTrades(event =>{
//     event.removeModdedTypedTrades()
// })

