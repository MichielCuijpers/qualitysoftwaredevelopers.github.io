import React, {Component} from 'react';
import './App.css';
import Organization from "./Organization";
import OrganizationList from "./OrganizationList";
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Grid from 'material-ui/Grid';

export function splitOnRepo(organizationList) {
    return organizationList.map(org => {
        return org.repos.map(r => {
            var newObject = JSON.parse(JSON.stringify(org));
            delete newObject.repos;
            newObject.repo = r;
            return newObject;
        });
    }).reduce((l1, l2) => l1.concat(l2), []);
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: new OrganizationList().getOrganizations(),
            loading: true
        };
        this.load.bind(this);
    }

    load() {
        axios.get('organizations/organizations.json').then(result => {
            this.setState({
                a: splitOnRepo(result.data),
                loading: false
            });
        }).catch(e => {
            console.log("uhoh", e);
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="App">
                    <div className="App-header">
                        <h2>QualitySoftwareDevelopers.github.io</h2>
                    </div>
                    <div>Loading...</div>
                </div>
            );
        } else {
            return (
                <MuiThemeProvider>
                    <div className="App">
                        <div className="App-header">
                            <h2>QualitySoftwareDevelopers.github.io</h2>
                        </div>
                        <Grid container>
                            {this.state.a.map((e, index) => <Grid item sm={6}><Organization key={e.name} name={e.name}/></Grid>)}
                        </Grid>
                    </div>
                </MuiThemeProvider>
            );
        }
    }
}

export default App;