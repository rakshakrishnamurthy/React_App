import EmployeeData from './DataSource.json';

export class DataGridSharedData {

    public static getEmployees(count?: number): any[] {
        const employees: any[] = EmployeeData;
        return employees;
    }
}
