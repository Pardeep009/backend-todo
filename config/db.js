const mongoose = require('mongoose');

const connectDB = async () => {
    while(true) {
        try {
            await mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGODB_PORT}/${process.env.DATABASE_NAME}`, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            });
            console.log('database connected...');
            break;
        } catch (error) {
            console.error('cannot connect to database' ,error);
        }
    }
};

module.exports = { connectDB };
