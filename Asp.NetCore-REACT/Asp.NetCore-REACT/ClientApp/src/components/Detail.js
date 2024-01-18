import React, { Component } from 'react';

export class Detail extends Component {
    static displayName = Detail.name;

    constructor(props) {
        super(props);
        this.state = {
            details: [], loading: true, pop: 0,

            idd:0,

        };

    }

    componentDidMount() {
        this.populateDetailData();

    }




    static renderContriesTable(countries,id) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Nr.</th>
                        <th>Name</th>
                        <th>Flag</th>
                        <th>Capital</th>
                        <th>Population</th> 
                        <th>Coat Of Alm</th>
                        <th>Det</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((country, index) =>
                        <tr key={country.name.common} >
                            <td>{index + 1}</td>
                            <td>Maps</td><td><a href={country.maps.openStreetMaps}>{country.name.common}</a></td>
                            <td><img src={country.flags.png} width="30" height="25" alt={country.name.common} title={country.name.common} /></td>
                            <td>{country.capital}</td>
                            <td align="right">{country.population}</td>
                            <td><img src={country.coatOfArms.png} width="30" height="25" /></td>
                            <td><a href={ 'https://restcountries.com/v3.1/alpha/' +country.ccn3}>det</a></td>
                        </tr>
                        
                    )}
 

                </tbody>
            </table>

        );
    }

    render() {
        //let contents = this.state.loading
        //  ? <p><em>Loading...</em></p>
        //    : Country.renderContriesTable(this.state.allcountries);



        let detailContents = Detail.renderContriesTable(this.state.details);
        return (
            <div>
                <h1 id="tabelLabel" >Countries</h1>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Author: </td>
                            <td>Felix Akabekwa</td>
                        </tr>
                        <tr>
                            <td>Date: </td>
                            <td>September 2022</td>
                        </tr>
                    </tbody>
                </table>
                <p>This component demonstrates fetching data from the server.</p>
                <table>
                    <tr>

                        <td>
                            {/*{contents}*/}
                            <h2 id="africa">Africa</h2>
                            <a href="country#tabelLabel">TOP</a>
                            {detailContents}
 

                        </td>
                    </tr>
                </table>

            </div>
        );
    }



    async populateDetailData() {
        const data = await (await fetch('https://restcountries.com/v3.1/alpha/332')).json();
        this.setState({ details: data, loading: false });
    }
}
