interface IRoule{
    id?: string;
    description: string
}

export class Roule {
    roule:IRoule

    constructor(rouleInfo: IRoule){
        this.roule = rouleInfo
    }
}