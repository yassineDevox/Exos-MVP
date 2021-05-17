import React, { Component } from 'react'
import Feed from '../components/post/feed';
import FilterPost from '../shared/filter-post';
import './../assets/css/home.css';
    
export default class HomePage extends Component {
    render() {
        return (
            <>
                <Header_LT />
                <main className="border">
                    {/* Filter By Level  */}
                    <FilterPost byLevel />
                    {/* Feed */}
                    <Feed/>
                    {/* Filter By Tags */}
                    <FilterPost byLevel={false} />
                </main> 
            </>
        )
    }
}