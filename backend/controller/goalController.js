const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async(req, res) =>
{
    res.status(200).json({message : 'Get Goals'})
}
)


const setGoal = asyncHandler(async(req, res) =>
{
    if(!req.body.Message)
    {
        res.status(400)
        throw new Error('Please add a new message')
    }
    res.status(200).json({message : 'Set Goal '})
}
)


const updateGoal = asyncHandler(async(req, res) =>
{
    res.status(200).json({message : `update goal ${req.params.id}` })
}
)


const deleteGoal = asyncHandler(async(req, res) =>
{
    res.status(200).json({message : 'Delete Goal '+ req.params.id })
}
)


module.exports = 
{
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}