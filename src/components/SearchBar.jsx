import React from 'react';

class SearchBar extends React.Component {
    state = { query: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.query);
    };

    render() {
        return (
            <div className="ui segment search_bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video search</label>
                        <input
                            type="text"
                            value={this.state.query}
                            onChange={(e) => this.setState({ query: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
