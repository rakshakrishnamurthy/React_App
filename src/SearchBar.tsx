import React from 'react'

export default class SearchBar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: any) {
        this.setState({ value: event.target.value });
        this.props.handleSearchChange(event.target.value);
    }

    render() {
        return (
            <form className="form-inline ml-3 mt-3 mb-3">
                <input value={this.state.value} className="form-control mr-sm-2" type="text" placeholder="Search Full Name" aria-label="Search Full Name" onChange={this.handleChange} />
            </form>
        );
    }
}