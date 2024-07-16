import mongoose from 'mongoose';

const getMongoURI = () => {
    try {
        const mongoURI = 'mongodb+srv://0322103702:eQaE58ZBsBIzrFIU@cluster0.wsfzlf5.mongodb.net/SecurityBox';
        return mongoURI;
    } catch (error) {
        console.error('Error al obtener la URI de MongoDB:', error.message);
        throw error;
    }
};

const connectToMongoDB = async () => {
    try {
        const mongoURI = getMongoURI();

        // Configurar mongoose con las opciones adecuadas
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });

        console.log('Conectado correctamente a MongoDB');
    } catch (error) {
        console.error('Error de conexión:', error.message);
        throw new Error('No se ha podido conectar a MongoDB');
    }
};

export default connectToMongoDB;
