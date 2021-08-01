import User from '../../../models/User';

export const resolvers = {
    getUsers: async () => await User.find(),
    getUser: async (_, { id }) => await User.findById(id)
};