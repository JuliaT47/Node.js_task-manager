import mongoose from 'mongoose';

const db_password = 'rGbWZeeqjmLkJGFw';
const URI =
    'mongodb+srv://kawaiineko55:rGbWZeeqjmLkJGFw@cluster1.kitws.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';

mongoose
    .connect(URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((e) => {
        console.error(e);
    });
