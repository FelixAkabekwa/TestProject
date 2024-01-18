import React, { Component } from 'react';

export class Continent extends Component {
    static displayName = Continent.name;

    constructor(props) {
        super(props);
        this.state = { actions: [], loading: true, continentImages:[] };
    }

    continentImages = [
        { url: "../../assets/africa.jpg" }, { url: "../../assets/asia.jpg" }, { url: "../../assets/europe.jfif" }, { url: "../../assets/northamerica.jfif" }, { url: "../../assets/oceania.gif" }, { url: "../../assets/southamerica.jfif" }
    ]

    componentDidMount() {
        this.populateActivityData();
    }

    GetAlert() {
        alert('OK');
    }

    static renderActivityTable(actions) {

        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th ><button onClick="">Name</button></th>
                        <th>Population</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {actions.map(action =>
                        <tr key={action.id}>
                            <td>{action.id}</td>
                            <td>{action.name}</td>
                            <td>{action.population}</td>
                            <td><img src={ action.images} width="50" height="60" /></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Continent.renderActivityTable(this.state.actions);

        return (

            <div>
                <h1 id="tabelLabel" >Continents</h1>
                <p>This component demonstrates fetching data from the Database through local api</p>
                {contents}
            </div>
        );
    }

    async populateActivityData() {
        const response = await fetch('/api/continents');
        const data = await response.json();
        this.setState({ actions: data, loading: false });
    }
}
