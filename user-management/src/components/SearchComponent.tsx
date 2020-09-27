import React from 'react';

const SearchComponent = () => {
    return (
        <div>
            <input 
                // onChange={this.handleSearch} 
                // value={this.state.searchterm} 
                name="searchterm" 
                className="form-control form-control-lg mt-3" 
                placeholder="Search User" 
                type="text" />
        </div>
    );
}

export default SearchComponent;
