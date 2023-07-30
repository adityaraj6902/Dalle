import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('MONGODB CONNECTION ESTABLISED'))
    .catch((err) => {
      console.error('SORRY!!NO CONNECTION ESTABLISED');
      console.error(err);
    });
};

export default connectDB;