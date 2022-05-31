const { User } = require("../models");

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ id: context.user._id })
                    .populate('books')
            }
            return userData;
        }
    }
};

module.exports = resolvers;