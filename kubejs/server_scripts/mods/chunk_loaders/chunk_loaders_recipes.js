ServerEvents.recipes(event => {
    
    event.remove({output: [
        "chunkloaders:basic_chunk_loader",
        "chunkloaders:advanced_chunk_loader",
        "chunkloaders:ultimate_chunk_loader"
    ]})
    
})