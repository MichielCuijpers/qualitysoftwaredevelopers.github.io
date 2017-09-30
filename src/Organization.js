import React from 'react';
import Card, {CardContent, CardHeader} from 'material-ui/Card';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    card: {
        maxWidth: 400
    }
});

class Organization extends React.Component {

    render() {
        const classes = this.props.classes;
        return (<Card className={classes.card}><CardHeader
            title={this.props.name}/><CardContent>{this.props.name}</CardContent></Card>);
    }
}

export default withStyles(styles)(Organization);