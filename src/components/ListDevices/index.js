import React, { Component } from 'react';

import './styles.css'

export default class ListDevices extends Component {

    state = {
        error: null,
        isLoaded: false,
        items: []
    };

    componentDidMount() {
        fetch('https://localhost:5001/v1/devices/dataofdevices')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul className="list-devices">
                    {items.map(item => (
                        <li key={item.Id}>
                            <strong>Dispositivo:</strong> {item.Device.Name}
                            <strong> Serial:</strong> {item.Device.Serial}
                            <strong> Data de cadastro:</strong> {item.CreationDate}
                            <ul className="list-devices-child">
                                <li>
                                   <strong>Latitude: </strong> {item.Latitude}
                                   <strong> Longitude: </strong> {item.Longitude}
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            );
        }
    }
}
