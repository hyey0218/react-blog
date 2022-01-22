import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Profile } from './components/menu/Profile';
import { History } from './components/menu/History';
import { Review } from './components/menu/Review';
import { Dev } from './components/menu/Dev';

import './css/custom.css'
import { ProfileSchool } from './components/Cards/ProfileSchool';
import './css/bootstrap.min.css';


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/Profile' component={Profile} />
                <Route path='/History' component={History} />
                <Route path='/Review' component={Review}  />
                <Route path='/Dev' component={Dev}  />
                <Route path='/Profile/ProfileSchool' component={ProfileSchool} />
            </Layout>
        );
    }
}
