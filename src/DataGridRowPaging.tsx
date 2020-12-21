import * as React from 'react';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { DataGridPager } from './DataGridPager';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridRowPaging extends React.Component<any, any> {

    private data: any[];
    private grid: IgrDataGrid;
    private pager: DataGridPager;

    constructor(props: any) {
        super(props);
        this.onGridRef = this.onGridRef.bind(this);
        this.onPagerRef = this.onPagerRef.bind(this);
        this.data = DataGridSharedData.getEmployees();
        console.log(this.data);
    }

    public onGridRef(grid: IgrDataGrid) {
        if (!grid) { return; }

        this.grid = grid;
    }
    public onPagerRef(pager: DataGridPager) {
        if (!pager) { return; }

        this.pager = pager;

        if (this.grid) {
            if (this.grid.sortDescriptions.count > 0) {
                this.onSortChanged();
            }
            if (this.grid.filterExpressions.size() > 0) {
                this.onFilterChanged();
            }
        }
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <IgrDataGrid
                    ref={this.onGridRef}
                    width="100%"
                    height="calc(100% - 65px)"
                    autoGenerateColumns={false}
                    sortDescriptionsChanged={this.onSortChanged}           
                    filterExpressionsChanged={this.onFilterChanged}
                    isColumnOptionsEnabled="true">
                    <IgrTextColumn field="ID" headerText="ID" width="*>150" />
                    <IgrTextColumn field="Name" headerText="Full Name" width="*>150" />
                    <IgrTextColumn field="Country" headerText="Country" width="*>120"/>
                    </IgrDataGrid>

                <DataGridPager
                    ref={this.onPagerRef}
                    dataSource={this.data}
                    pageSize={5}
                    pagedChanged={this.onPageChanged}/>
            </div>
        );
    }

    private onSortChanged = () => {
        if (this.pager) {
            this.pager.applySorts(this.grid.sortDescriptions);
        }
    }
    private onFilterChanged = () => {
        if (this.pager) {
            this.pager.applyFilters(this.grid.filterExpressions);
        }
    }
    private onPageChanged = (pageNumber: number, data: any[]) => {
        this.grid.dataSource = data;
        this.grid.flush();
        this.grid.scrollToRowByIndex(0);
    };
}
