import React, { Component } from 'react';
import axios from 'axios';

class Trampos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentWillMount() {
        axios
            .get('http://trampos.co/api/oportunidades.json')
            .then( response => {
                const list = response.data;
                this.setState({
                    list
                });
                list.map(item => {
                    const jobTitle = item.opportunity.name;
                    const companyName = item.opportunity.company_name;
                    const jobLink = item.opportunity.permaLink;
                })
            })
            .catch( error => {
                console.log(error);
            })
    }

    render() {
        return(
            <div className="experiment">
                { this.state.list.map((item, index) => {
                    return (
                        <div key={index}> 
                            <span>
                                <a href={item.opportunity.permalink}>{item.opportunity.permalink}</a>
                            </span>
                            <span>{item.opportunity.name}</span>
                            <span>{item.opportunity.company_name}</span>
                        </div> 
                    );
                })}
            </div>
        )
    }
}

export default Trampos;