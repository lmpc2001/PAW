enum State {
    new,
    used,
}

interface IBook{
    id: string;
    employee_id?: string;
    user_id?: string;
    title: string;
    author: string;
    bar_code: string;
    state: State;
    price: number;
    isbn: string;
    units_stock: number;
    coverImage: string;
}

export class Book {
    book:IBook

    constructor(bookInfo: IBook){
        this.book = bookInfo
    }
}