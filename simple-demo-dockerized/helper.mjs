const connectDB = async () => {
    const mongoose = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Connected to MongoDB');
        }, 1000);
    });
    return mongoose;
};

export  default  connectDB;