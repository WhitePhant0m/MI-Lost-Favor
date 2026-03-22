// Modifying materials

// Uranium
MIMaterialEvents.modifyMaterial('uranium', event => {
    event.builder
        .addParts('plate')
})

// Steel
MIMaterialEvents.modifyMaterial('steel', event => {
    event.builder
        .addParts('wire')
})

// Lead
MIMaterialEvents.modifyMaterial('lead', event => {
    event.builder
        .addParts('wire', 'bolt', 'rod')
})

// Invar
MIMaterialEvents.modifyMaterial('invar', event => {
    event.builder
        .pipeCasing(8.0)
        .addParts("curved_plate")
})
