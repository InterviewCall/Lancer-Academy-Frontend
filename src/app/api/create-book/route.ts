import { NextRequest, NextResponse } from 'next/server';

import BookRepository from '@/repositories/BookRepository';
import BookService from '@/services/BookService';

const bookService = new BookService(new BookRepository());

export async function POST(req: NextRequest) {
    try {
        const { fullName, email, phoneNo } = await req.json();
        const makeBook = await bookService.createBook(fullName, email, phoneNo);

        return NextResponse.json({
            success: true,
            message: 'Successfully book a call',
            data: makeBook,
            error: {}
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error
        });
    }
}