import { importedItems } from './imports/items.js';

export let items = {}
for(let k in importedItems)
    items[k] = importedItems[k];

