import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();

        this.state = {
            data:
            [
                {
                    "id": 1,
                    "name": "Derian",
                    "age": 23
                },
                {
                    "id": 2,
                    "name": "Indra",
                    "age": "22"
                },
                {
                    "id": 3,
                    "name": "Pratama",
                    "age": "21"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <h1> Header </h1>
            </div>
        );
    }
}

class TableRow extends Component {
    render() {
        return (
            <div>
                <tr>
                    <td>{this.props.data.id}</td>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.age}</td>
                </tr>
            </div>
        );
    }
}

export default App;