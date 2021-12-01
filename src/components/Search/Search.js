import { Input } from "antd";
import { useState } from 'react';
import './Search.css';

const Search = (props) => {

    const {search} = props

    return (
        <div className="Search">
            <p>Search</p>
            <Input type="text" onChange={(evt) => search(evt.target.value)} />
        </div>
    );
}

export default Search;