import BookRepository from "@/repositories/BookRepository";

class BookService {
    private bookRepository;

    constructor(bookRepository: BookRepository) {
        this.bookRepository = bookRepository;
    }

    async createBook(fullName: string, email: string, phoneNo: string) {
        try {
            const book = await this.bookRepository.createBook(fullName, email, phoneNo);
            return book;
        } catch (error) {
            throw error;
        }
    }
}

export default BookService;