const zod = require('zod');

const createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

const updateTodo = zod.object({
    _id : zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}

// https://gist.github.com/hkirat/f2c4586a835a80ed3af978890a2132d2