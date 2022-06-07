interface IPurchase{
    id: string;
    employee_id?: string;
    client_id?: string;
    nif?: string;
    books: Array<string>
    total_price?: number;
}

export class Purchase {
    purchase:IPurchase

    constructor(purchaseInfo: IPurchase){
        this.purchase = purchaseInfo
    }
}