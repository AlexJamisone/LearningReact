
// Components

import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

//CSS import

import './app.css'


// Layout

const App = () => {


    const data = [
        {label: 'Going to learn React', important: true, id: 'ewrwe'},
        {label: 'Thats is so good', important: false, id: 'ewrwer'},
        {label: "I need a breake...", important: false, id: 'hhyhfg'}
    ]

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;

