import {connect} from 'mongoose'

export async function startConnection() {
    const db = await connect('mongodb://localhost/gallery-project-db',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        
    });
    console.log('Database is connected');
    
}

