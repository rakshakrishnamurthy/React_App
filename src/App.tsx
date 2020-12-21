import React, { Component } from 'react'
import Header from './Header';
import SearchBar from './SearchBar'
import "bootstrap/dist/css/bootstrap.min.css";
import DataGridRowPaging from './DataGridRowPaging';
import Footer from './Footer';
export default class App extends Component {
    render() {
        return (
             <div className="App">
            
                <Header></Header>
<SearchBar></SearchBar>
 <DataGridRowPaging></DataGridRowPaging>
{/* <Footer></Footer> */}
 
            </div>
        )
    }
}

