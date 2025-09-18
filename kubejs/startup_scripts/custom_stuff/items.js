StartupEvents.registry('item', event => {
    event.create('bronze_glass').texture('custom_stuff:item/bronze_glass').maxStackSize(8)
    event.create('steel_infused_glass').texture('custom_stuff:item/steel_infused_glass').maxStackSize(8)
    event.create('tempered_glass').texture('custom_stuff:item/tempered_glass').maxStackSize(8)
    event.create('bronze_machine_bit').texture('custom_stuff:item/bronze_machine_bit').maxStackSize(32)
    event.create('steel_machine_bit').texture('custom_stuff:item/steel_machine_bit').maxStackSize(32)
    event.create('basic_machine_bit').texture('custom_stuff:item/basic_machine_bit').maxStackSize(32)
    event.create('small_copper_fluid_container').texture('custom_stuff:item/copper_fluid_container').maxStackSize(64)
    event.create('small_steel_fluid_container').texture('custom_stuff:item/steel_fluid_container').maxStackSize(64)

    event.create('rangefinder').texture('custom_stuff:item/rangefinder').maxStackSize(64)
    event.create('cd_reader').texture('custom_stuff:item/cd_reader').maxStackSize(64)
    event.create('cd').texture('custom_stuff:item/cd').maxStackSize(8)
    event.create('lens').texture('custom_stuff:item/lens').maxStackSize(64)

    event.create('old_diary').texture('custom_stuff:item/old_diary').maxStackSize(1)
    event.create('old_tablet').texture('custom_stuff:item/old_tablet').maxStackSize(1)
    event.create('disk_from_space').texture('custom_stuff:item/disk_from_space').maxStackSize(1)
    event.create('holy_book_of_color').texture('custom_stuff:item/color_holy_book').maxStackSize(1)
    event.create('old_notes').texture('custom_stuff:item/old_notes').maxStackSize(1)

    event.create('punched_card').texture('custom_stuff:item/punched_card').maxStackSize(1)
    event.create('blank_blueprint').texture('custom_stuff:item/blank_blueprint').maxStackSize(63)

    //disks
    event.create("engineer_disk").texture('custom_stuff:item/ie_disk').maxStackSize(1).displayName("Engineer's disk")



})