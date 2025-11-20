import connectToDb from "@/configs/bookDb";

import Book, { ICandidate } from "@/models/Book";

class BookRepository {
    private bookModel;

    constructor() {
        connectToDb();
        this.bookModel = Book;
    }

    async createBook(fullName: string, email: string, phoneNo: string): Promise<ICandidate> {
        const book = await this.bookModel.create({
            fullName,
            email,
            phoneNo
        });

        return book;
    }
}

export default BookRepository;