import React, { Component } from 'react'
import Feed from '../components/post/feed';
import FilterPost from '../shared/filter-post';
import Header_LT from '../shared/header';
import './../assets/css/home.css';
    
export default class HomePage extends Component {
    render() {
        return (
            <>
            {/* HEADER */}
                <Header_LT />
             {/* MAIN CONTENT    */}
                <main className="border">
                    {/* Filter By Level In Default */}
                    <FilterPost />
                    {/* Feed */}
                    <Feed  />
                    {/* Filter By Subject */}
                    <FilterPost bySubject />
                </main> 
            </>
        )
    }
}
