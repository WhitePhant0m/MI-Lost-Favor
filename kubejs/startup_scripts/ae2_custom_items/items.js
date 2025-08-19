StartupEvents.registry('item', event => {

    //cores
    event.create('core_hull').texture('ae2_custom_stuff:item/core_hull').maxStackSize(64)
    event.create('core_press').texture('ae2_custom_stuff:item/core_press').maxStackSize(16)

    //cells
    event.create('cell_half').texture('ae2_custom_stuff:item/cell_half').maxStackSize(64)
    event.create('cell_press').texture('ae2_custom_stuff:item/cell_press').maxStackSize(16)

    //MI automation tokens (disks)
    event.create('mysterious_disk').texture('ae2_custom_stuff:item/automation_disk_t1').maxStackSize(8)
    event.create('storage_disk').texture('ae2_custom_stuff:item/automation_disk_t2').maxStackSize(8)
    event.create('automation_disk').texture('ae2_custom_stuff:item/automation_disk_t3').maxStackSize(8)
    event.create('quantum_disk').texture('ae2_custom_stuff:item/automation_disk_t4').maxStackSize(8)

})