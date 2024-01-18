import React, { Component } from 'react';

export class FetchAction extends Component {
    static displayName = FetchAction.name;

    constructor(props) {
        super(props);
        this.state = { actions: [], loading: true };
    }

    componentDidMount() {
        this.populateActivityData();
    }

    static renderActivityTable(actions) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date (C)</th>
                        <th>Action (F)</th>
                    </tr>
                </thead>
                <tbody>
                    {actions.map(action =>
                        <tr key={action.id}>
                            <td>{action.id }</td>
                            <td>{action.date}</td>
                            <td>{action.action}</td>

                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchAction.renderActivityTable(this.state.actions);

        return (

            <div>
                <h1 id="tabelLabel" >Action data</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateActivityData() {
        const response = await fetch('activity');
        const data = await response.json();
        this.setState({ actions: data, loading: false });
    }
}
