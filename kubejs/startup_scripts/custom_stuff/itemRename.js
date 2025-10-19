global.langRenames = global.langRenames || {}

/**
 * Register localized rename data for an item / block / entity.
 *
 * Saves the mapping into the global object `global.langRenames` using `itemId` as key:
 *   global.langRenames[itemId] = { langs: { "en_us": "Name", ... }, types: [...] }
 *
 * ## Behavior:
 * - If `itemId` is falsy, the function returns early and does nothing.
 * - `langMap` may contain:
 *     - `langs` (object) — translations in the form { "en_us": "Name", "ru_ru": "Название", ... }.
 *       For convenience the function also supports passing the translations directly
 *       (i.e. `langMap` itself can be the translations object), and will merge with any
 *       existing entry.
 *     - `types` (array, optional) — indicates which kinds of rename to apply.
 *         strings "Item" / "Block" / "entity" (case-insensitive).
 *       If `types` is omitted or empty the code that consumes `global.langRenames`
 *       may treat the entry as an Item rename
 *
 * The function merges with any previously registered names for the same itemId.
 *
 * ## Examples:
 *   ```js 
 * addRename("sophisticatedbackpacks:copper_backpack", {
 *     langs: { "en_us": "Bronze Backpack", "ru_ru": "Бронзовый рюкзак" },
 *     types: ["Item", "Block"]
 *   });
 *   ```
 *
 *     (no `langs` wrapper)
 * ```jsor passing translations directly only for item rename
 *   addRename("mod:some_item", { "en_us": "Some Item", "ru_ru": "Какой-то предмет" });
 * ```
 *
 * After calling, consumer code can check `entry.types` to decide whether to call
 * `event.renameItem(...)` / `event.renameBlock(...)` / `event.renameEntity(...)` for each language.
 *
 * @param {string} itemId - Identifier of the item/block/entity (e.g. "mod:item_name"). If falsy, nothing happens.
 * @param {Object} langMap - Map with translations and optional types.
 * @param {Object} [langMap.langs] - Optional wrapper object of translations: { "en_us": "Name", ... }.
 *                                   If omitted, `langMap` itself is treated as the translations object.
 * @param {Array.<(string)>} [langMap.types] - Optional array specifying types to apply to.
 *                                                     Elements can be constructors (Item, Block) or strings ("Item"/"Block").
 * @returns {void}
 */
function addRename(itemId, langMap) {
  if (!itemId) return
  global.langRenames[itemId] = Object.assign(global.langRenames[itemId] || {}, langMap)
}

addRename(
  "sophisticatedbackpacks:copper_backpack",
  {
    langs: { "en_us": "Bronze Backpack", "ru_ru": "Бронзовый рюкзак" },
    types: ["Block", "Item"]
  }
)

//TODO: Just for test remove in future 
addRename(
  "ars_nouveau:alakarkinos",
  {
    langs: { "en_us": "puk", "ru_ru": "Пук" },
    types: ["Entity"]
  }
)