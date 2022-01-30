import { Component } from 'react';
import { Resume } from './types';
import Header from './Header';

import './App.css';

export default class App extends Component<Resume> {
    public state: Resume;

    constructor(props: Resume) {
        super(props);
        this.state = props;
    }

    public render() {
        return (
            <div className="App">
                <Header name={this.state.name} title={this.state.title} />
            </div>
        )
    }
}

// function App(props: Resume) {
//     return (
//         <div className="App">
//             <Header name={props.name} title={props.title} />
//         </div>
//     );
// }

// export default App;
