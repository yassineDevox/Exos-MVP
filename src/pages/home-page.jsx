import React, { Component } from 'react'
import Feed from '../components/post/feed';
import FormPost from '../components/post/form';
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
                    <FilterPost title="Niveau d'étude " />
                    {/* Feed */}
                    <Feed  />
                    {/* Filter By Subject */}
                    <FilterPost title="Matiére " bySubject />
                    
                </main> 
              {/* Modals */}
              <FormPost />
            </>
        )
    }
}
