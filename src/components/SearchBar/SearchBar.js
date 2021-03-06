import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           term: '',
           location: '',
           sortBy: 'best_match',
        }
    };

    getSortByClass(sortByOption) {
        if(this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    };

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption})
    }

    handleTermChanfe(event) {
        this.setState({})
    }

    hanldeLocationChange(event) {
        this.setState({})
    }

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return < li key={ sortByOptionValue } className={this.getSortByClass(sortByOption)} onCliclk={this.handleSortByChange.bind(this,sortByOptionValue)}>{ sortByOption }</li >
        })
    }
    
    
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a href="www.#.com">Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;