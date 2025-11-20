import { Document, Model, model, models, Schema } from 'mongoose';

export interface ICandidate extends Document {
    fullName: string
    email: string
    phoneNo: string
}

const bookSchema = new Schema<ICandidate>({
    fullName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phoneNo: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Book: Model<ICandidate> = models.Book || model<ICandidate>('Book', bookSchema);

export default Book;