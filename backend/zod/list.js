const zod = require('zod');

const createList = zod.object({
    itemName : zod.string(),
    amount : zod.string()
})

const updateList = zod.object({
    _id : zod.string()
})

module.exports = {
    createList: createList,
    updateList: updateList
}