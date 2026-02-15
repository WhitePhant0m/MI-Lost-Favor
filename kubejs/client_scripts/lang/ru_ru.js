ClientEvents.lang('ru_ru', event => {
    event.add('mia.tooltip.strainer.how.to.use', 'Тут будет текст о том как использовать strainer')
    event.add('milf.text.entity.interact.part0', 'На данный момент, ')
    event.add('milf.text.entity.interact.part1', ' не хочет взаимодействовать с тобой')
    event.add('milf.text.entity.interact.part2', 'Что-то магическое запрещает вам использовать ')
    event.add('milf.text.block.interact.part0', 'Странная магия мешает вам использовать этот блок')
    event.add('milf.text.first_join', `Добро пожаловать в ${textAnimatorString("MI:Lost Favor", "grad", {from:"#848dcb", to:"#45509d", f:0.5})}!`)
    
    event.add('milf.stage.congratulations', `${textAnimatorString("Поздравляем!!!", "wave", {a:0.25, w:0.25, f:0.5})}`)
    event.add('milf.stage.something_changed', `${textAnimatorString("Вы чувствуете, что что-то изменилось...", "wiggle", {a:0.25, f:0.35})}`)

    event.add('milf.stage.bronze_age', `Вы перешли в ${textAnimatorString("Бронзовую Эпоху", "grad", {from:"#CD7F32", to:"#F6BA7D", f:0.5})}`)
    event.add('milf.stage.monsterplus_mobs', `Вы начали слышать ${textAnimatorString("крики мертвых", "grad", {from:"#F00B0B", to:"#7A0F0B", f:0.5})} ночью`)
    event.add('milf.stage.tier_1_access_ore', `Шахты были благословлены ${textAnimatorString("новыми рудами", "grad", {from:"#55A2FA", to:"#8DDBFF", f:0.5})}...`)
    event.add('milf.stage.tier_2_access_ore', 'Unlocked: iridium / platinum / titanium / tungsten / uranium ore')
    event.add('milf.stage.saturation', `Вы потеряли свое ${textAnimatorString("насыщение", "grad", {from:"#E4C549", to:"#FDE49A", f:0.5})}...`)
    event.add('milf.stage.xaeromap', 'Разблокированы: мини-карта, радар, метки')
    event.add('milf.stage.minecraft_mobs', `Вы начали слышать ${textAnimatorString("странные звуки", "grad", {from:"#ED1A1A", to:"#B62651", f:0.5})} ночью...`)
    event.add('milf.stage.early_items', `Этот мир больше не ${textAnimatorString("отвергает", "glitch")} вас...`)
    event.add('milf.how_to_seed.tooltip', 'Можно найти в птичьем гнезде')

    event.add('milf.cannot.mine.block', 'Вы не можете добыть блок на данный момент')
    event.add('kubejs.press_button', 'Зажми ')
    event.add('kubejs.for_details', 'для подробной информации')
    event.add('kubejs.amber_visage.tooltip', 'Используется как топливо в Transmogrification Table для изменения внешнего вида предметов, не влияя на их функциональность')
    event.add('kubejs.beltborne_lanterns.tooltip', 'Нажмите B, держа фонарь — он прикрепится к твоему поясу. Нужно вернуть его в руки? Нажмите B снова.')

    event.add('milf.placers.notification1', `Не хватает места, чтобы ${textAnimatorString("это", "bounce")} разместить`)
    event.add('milf.placers.notification2', `Сначала необходимо выбрать ${textAnimatorString("правильное направление", "glitch")}`)
    event.add('milf.placers.notification3', `Структура должна быть ${textAnimatorString("ТОЧНО", "shake")} такой же`)

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