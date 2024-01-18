import React, { Component } from 'react';

export class Country extends Component {
    static displayName = Country.name;

    constructor(props) {
        super(props);
        this.state = {
            allcountries: [], loading: true, pop: 0,
            africas: [],
            asias: [],
            oceanias: [],
            europes: [],
            northamericas: [],
            southamericas: [],
            continents: []


        };
        //this.Calculate = this.Calculate.bind(this);
        this.GetInfo.bind(this);
    }

    componentDidMount() {
        this.populateCountryData();
        this.populateAfricaData();
        this.populateAsiaData();
        this.populateEuropeData();
        this.populateNorthAmericaData();
        this.populateSouthAmericaData();
        this.populateOceaniaData();
    }

    continentImages = [
        { url: "../../assets/africa.jpg" }, { url: "../../assets/asia.jpg" }, { url: "../../assets/europe.jfif" }, { url: "../../assets/northamerica.jfif" }, { url: "../../assets/oceania.gif" }, { url: "../../assets/southamerica.jfif" }
    ]



    Calculate(pp) {
        this.setState({
            pop: this.state.pop + pp,
        });
    }


    GetInfo() {
        alert("ok");
    }
    GetContinents() {
        var continents = [
            { "id": "1", "Name": "Africa" }, { "id": "2", "Name": "Asia" }, { "id": "3", "Name": "Europe" }, { "id": "4", "Name": "NorthAmerica" }, { "id": "5", "Name": "Oceania" }, { "Id": "6", "Name": "SouthAmerica" }
        ];
        return continents;
    }



    static renderContriesTable(countries) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Nr.</th>
                        <th onClick={this.GetInfo}>Name</th>
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
                            <td><a href={country.maps.openStreetMaps}>{country.name.common}</a></td>
                            <td><img src={country.flags.png} width="30" height="25" alt={country.name.common} title={country.name.common} /></td>
                            <td>{country.capital}</td>
                            <td align="right">{country.population}</td>
                            <td><img src={country.coatOfArms.png} width="30" height="25" /></td>
                            <td><a href={ 'https://restcountries.com/v3.1/alpha/' +country.ccn3}>det</a></td>
                            <td><a href={'/detail/'}>det</a></td>
                        </tr>
                    )}
                </tbody>
            </table>

        );
    }

    //ConvertItem(sps) {
    //    let asiaContents = Country.renderContriesTable(sps.sort((a, b) => {
    //        const aName = a.name.common, bName = b.name.common;
    //        return ((aName > bName) ? 1 : ((bName > aName) ? -1 : 0))
    //    }));
    //}

    render() {
        //let contents = this.state.loading
        //  ? <p><em>Loading...</em></p>
        //    : Country.renderContriesTable(this.state.allcountries);
        this.continents = [
            { "id": "1", "Name": "Africa" }, { "id": "2", "Name": "Asia" }, { "id": "3", "Name": "Europe" }, { "id": "4", "Name": "NorthAmerica" }, { "id": "5", "Name": "Oceania" }, { "Id": "6", "Name": "SouthAmerica" }
        ];


        let africaContents = Country.renderContriesTable(this.state.africas.sort((a, b) => {
            const aName = a.name.common, bName = b.name.common;
            return ((aName>bName)?1:((bName>aName)? -1:0))
        }));
        let asiaContents = Country.renderContriesTable(this.state.asias.sort((a, b) => {
            const aName = a.name.common, bName = b.name.common;
            return ((aName > bName) ? 1 : ((bName > aName) ? -1 : 0))
        }));
        let europeContents = Country.renderContriesTable(this.state.europes.sort((a, b) => {
            const aName = a.name.common, bName = b.name.common;
            return ((aName > bName) ? 1 : ((bName > aName) ? -1 : 0))
        }));
        let oceaniaContents = Country.renderContriesTable(this.state.oceanias);
        let northAmericaContents = Country.renderContriesTable(this.state.northamericas);
        let southAmericaContents = Country.renderContriesTable(this.state.southamericas);
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
                        <td valign="top">
                            <ul>
                                <li><a href="country#africa">AFRICA</a></li>
                                <li><a href="country#asia">ASIA</a></li>
                                <li><a href="country#europe">EUROPE</a></li>
                                <li><a href="country#oceania">OCEANIA</a></li>
                                <li><a href="country#northamerica">NORTH AMERICA</a></li>
                                <li><a href="country#southamerica">SOUTH AMERICA</a></li>

                            </ul>
                        </td>
                        <td width="100"></td>
                        <td>
                            {/*{contents}*/}
                            <h2 id="africa">Africa</h2>
                            <a href="country#tabelLabel">TOP</a>
                            {africaContents}
                            <h2 id="asia">Asia</h2>
                            <a href="country#tabelLabel">TOP</a>
                            {asiaContents}
                            <h2 id="europe">Europe</h2>
                            <a href="country#tabelLabel">TOP</a>
                            {europeContents}
                            <h2 id="oceania">Oceania</h2>
                            <a href="country#tabelLabel">TOP</a>
                            {oceaniaContents}
                            <h2 id="northamerica">North America</h2>
                            <a href="country#tabelLabel">TOP</a>
                            {northAmericaContents}
                            <h2 id="southamerica">South America</h2>
                            <a href="country#tabelLabel">TOP</a>
                            {/*<a href="country#tabelLabel">TOP</a>*/}
                            {southAmericaContents}
                        </td>
                    </tr>
                </table>

            </div>
        );
    }

    async populateCountryData() {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        //data = data.OrderBy(o => o.name);

        this.setState({ allcountries: data, loading: false });
    }

    async populateAfricaData() {
        const data = await (await fetch('https://restcountries.com/v3.1/region/Africa')).json();
        this.setState({ africas: data, loading: false });
        //this.state.africas.OrderBy(o => o.name);
        
    }

    async populateEuropeData() {
        const data = await (await fetch('https://restcountries.com/v3.1/region/Europe')).json();
        this.setState({ europes: data, loading: false });
    }
    async populateAsiaData() {
        const data = await (await fetch('https://restcountries.com/v3.1/region/Asia')).json();
        this.setState({ asias: data, loading: false });
    }

    async populateOceaniaData() {
        const data = await (await fetch('https://restcountries.com/v3.1/region/Oceania')).json();
        this.setState({ oceanias: data, loading: false });
    }

    async populateNorthAmericaData() {
        const data = await (await fetch('https://restcountries.com/v3.1/region/North%20America')).json();
        this.setState({ northamericas: data, loading: false });
    }

    async populateSouthAmericaData() {
        const data = await (await fetch('https://restcountries.com/v3.1/region/South%20America')).json();
        this.setState({ southamericas: data, loading: false });
    }
}
