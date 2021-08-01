import User from '../../../models/User';

export const resolvers = {
    createUser: async (_, { input }) => {
        const newUser = new User(input);
        await newUser.save();
        return newUser;
    },
    updateUser: async (_, { _id, input }) => {
        return await User.findByIdAndUpdate(_id, input, { new: true });
    },
    deleteUser: async (_, { _id }) => {
        return await User.findByIdAndDelete(_id);
    }
};