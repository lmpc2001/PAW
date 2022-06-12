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

export interface ISearchBook {
    title?: string;
    author?: string;
    isbn?: string;
    state?: 'Novo' | 'Usado';
    valMin?: number;
    valMax?: number;
}

export interface IUpdateBook {
    author?: string;
    isbn?: string;
    units_stock: number;
    price: number;
}

export class Book {
    book: IBook

    constructor(private bookInfo: IBook) {
        this.book = bookInfo
    }
}