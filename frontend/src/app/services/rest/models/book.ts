interface IBook {
    id?: string;
    employee_id?: string;
    user_id?: string;
    title: string;
    author: string;
    state: 'Novo' | 'Usado';
    price: number;
    isbn: string;
    units_stock: number;
    coverImage: File;
}

export class Book {
    book: IBook

    constructor(private bookInfo: IBook) {
        this.book = bookInfo
    }
}