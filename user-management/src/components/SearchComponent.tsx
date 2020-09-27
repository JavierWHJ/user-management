import React from 'react';

interface Props {
    searchUser: (query: string) => void;
}

const SearchComponent = (props: Props) => {

    const handleChange = (e: any) => {
        props.searchUser(e.target.value);
    }

    return (
        <div>
            <input 
                onChange={handleChange}
                name="searchterm" 
                className="form-control form-control-lg mt-3" 
                placeholder="Search User" 
                type="text" />
        </div>
    );
}

export default SearchComponent;
