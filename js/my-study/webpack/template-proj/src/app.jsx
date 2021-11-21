import { render } from 'less';
import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            title: '前端1222444'
        }
    }

    render() {
        return (
            <div>
                {this.state.title}
            </div>
        );
    }
}

export default App;