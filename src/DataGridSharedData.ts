

import EmployeeData from './DataSource.json';


export class DataGridSharedData {

    public static getEmployees(count?: number): any[] {
        if (count === undefined) {
            count = 250;
        }

        const employees: any[] = EmployeeData;
   
        return employees;
    }

}
