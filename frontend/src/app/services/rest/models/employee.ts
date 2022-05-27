interface IEmployee {
    id?: string;
    userId?: string;
    roule_id?: string;
    employee_id?: string;
    name: string;
    phone_number: string;
    email: string;
    password: string;
}

export class Employee {
    employee: IEmployee

    constructor(employeeInfo: IEmployee) {
        this.employee = employeeInfo
    }
}