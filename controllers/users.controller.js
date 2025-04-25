import UserModel from '../models/user.model.js'


export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find()
        return res.status(200).json({
            "users": users
        })
    } catch(error) {
        console.log(error)
    }
}

export const getSingleUser = async (req, res) => {
    try {
        const { id } = req.params

        const user = await UserModel.findOne({ _id: id })
        return res.status(200).json({
            "user": user
        })
    } catch(error) {
        console.log(error)
    }
}

export const deleteSingleUser = async (req, res) => {
    try {
        const { id } = req.params

        const deleteUser = await UserModel.findOneAndDelete({ _id: id })
        if (deleteUser) {
            return res.status(200).json({
                "message": "User deleted"
            })
        }
    } catch(error) {
        console.log(error)
    }
}

export const updateSingleUser = async (req, res) => {
    try {
        const { id } = req.params
        const { username, password, role } = req.body
        const update = await UserModel.findOneAndUpdate({ _id: id }, { username, password, role })
        if (update) {
            return res.status(200).json({
                "message": "User updated"
            })
        }
    } catch(error) {
        console.log(error)
    }
}