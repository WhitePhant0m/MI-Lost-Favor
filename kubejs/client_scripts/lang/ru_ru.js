ClientEvents.lang('ru_ru', event => {
    event.add('mia.tooltip.strainer.how.to.use', 'Тут будет текст о том как использовать strainer')
    event.add('milf.text.entity.interact.part0', 'На данный момент, ')
    event.add('milf.text.entity.interact.part1', ' не хочет взаимодействовать с тобой')
    event.add('milf.text.entity.interact.part2', 'Что-то магическое запрещает вам использовать ')
    event.add('milf.text.block.interact.part0', 'Странная магия мешает вам использовать этот блок')
    
    event.add('milf.stage.tier_1_access_ore', 'Unlocked: quartz / debris / emerald / diamond / lapis / gold / antimony / bauxite / lead / monazite / nickel / salt ore')
    event.add('milf.stage.tier_2_access_ore', 'Unlocked: iridium / platinum / titanium / tungsten / uranium ore')
    event.add('milf.stage.saturation', 'Вы потеряли насыщение!')
    event.add('milf.stage.xaeromap', 'Разблокированы: мини-карта, радар, метки')
    event.add('milf.stage.minecraft_mobs', 'Вы стали слышать странные звуки в ночи')
    event.add('milf.stage.early_items', 'Вам доступна торговля с жителями, лутинг сундуков, взаимодействие с спавнерами')

    event.add('milf.cannot.mine.block', 'Вы не можете добыть блок на данный момент')
    event.add('kubejs.press_button', 'Зажми ')
    event.add('kubejs.for_details', 'для подробной информации')
    event.add('kubejs.amber_visage.tooltip', 'Используется как топливо в Transmogrification Table для изменения внешнего вида предметов, не влияя на их функциональность')

    event.add('milf.placers.notification1', `Не хватает места, чтобы ${textAnimatorString("это", "bounce")} разместить`)
    event.add('milf.placers.notification2', `Сначала необходимо выбрать  ${textAnimatorString("правильное направление", "glitch")}`)
    event.add('milf.placers.notification3', `Структура должна быть ${textAnimatorString("ТОЧНО ", "shake")} такой же`)

    event.add('milf.placers.gui1', `Используйте любой тип ${textAnimatorStringForEach("МОЛОТКА", "bounce")} для создания структуры!`)
    event.add('milf.placers.gui2', `Щелкните правой кнопкой мыши пустой рукой, чтобы просмотреть предварительный вариант.`)
    event.add('milf.placers.gui3', ` + ПКМ с пустой рукой, чтобы удалить предварительный просмотр`)
    event.add('milf.empty_box.gui1', `Вы все еще можете вернуть свою структуру!`)
    event.add('milf.empty_box.gui2_1', `Просто `)
    event.add('milf.empty_box.gui2_2', ` + ПКМ с пустой рукой, чтобы вернуть её обратно`)
    event.add('milf.empty_box.gui3_1', `Обратите внимание, что разбивание этой коробки приведет к `)
    event.add('milf.empty_box.gui3_2', `${textAnimatorString("РАЗРУШЕНИЮ", "glitch")}`)
    event.add('milf.empty_box.gui3_3', " этой коробки")
    
    event.add('milf.text.dim.cant_visit', `${textAnimatorString("Какая-то магия останавливает вас", "glitch")}`)

    event.add('milf.flags.claimed', "Чанк запривачен")
    event.add('milf.flags.unclaimed', "Чанк распривачен")

    event.add('gateways.basic/deer', "Врата Оленя")

    //#region rituals
        event.add('ritual.occultism.craft_curio_bag.started', "Starting the ritual: Craft Trinkets Pouch.")
        event.add('ritual.occultism.craft_curio_bag.conditions', "Not all requirements for this ritual are met.")
        event.add('ritual.occultism.craft_curio_bag.finished', "Ritual completed successfully: Craft Trinkets Pouch.")
        event.add('ritual.occultism.craft_curio_bag.interrupted', "Interruption in the ritual: Craft Trinkets Pouch.")
        
        event.add('ritual.occultism.craft_vial_of_liquid_confidence.started', "Starting the ritual: Craft Vial Of Liquid Confidence.")
        event.add('ritual.occultism.craft_vial_of_liquid_confidence.conditions', "Not all requirements for this ritual are met.")
        event.add('ritual.occultism.craft_vial_of_liquid_confidence.finished', "Ritual completed successfully: Craft Vial Of Liquid Confidence.")
        event.add('ritual.occultism.craft_vial_of_liquid_confidence.interrupted', "Interruption in the ritual: Craft Vial Of Liquid Confidence.")
    //#endregion
})