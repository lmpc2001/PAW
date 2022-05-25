interface IEmployee{
    id: string;
    userId?: string;
    roule_id?: string;
    name: string;
    phone_Number: string;
}

export class Employee {
    employee:IEmployee

    constructor(employeeInfo: IEmployee){
        this.employee = employeeInfo
    }
}