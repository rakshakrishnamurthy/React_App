import React, { Component } from 'react'
import Header from './Header';
import SearchBar from './SearchBar'
import "bootstrap/dist/css/bootstrap.min.css";
import DataGridRowPaging from './DataGridRowPaging';
import Footer from './Footer';

export default class App extends Component<any, any> {
    constructor(props: any) {
                super(props);
                this.handleSearchChange = this.handleSearchChange.bind(this);
                this.state = { searchText: '' };
    }
    handleSearchChange(searchText: string) {
                this.setState({ searchText: searchText });
    }
    render() {
        return (
            <div className="App">
                <Header></Header>
                <SearchBar handleSearchChange={this.handleSearchChange}></SearchBar>
                <DataGridRowPaging searchText={this.state.searchText}></DataGridRowPaging>
                <Footer></Footer>
            </div>
        )
    }
}