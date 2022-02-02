import React, { Component } from 'react';
import PersonalCredit from './PersonalCredit';
import EntityCredit from "./EntityCredit";
import Contribution from "./Contribution"

export default class Main extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">

                        </div>
                        <div className="col-10">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-credit"
                                       role="tab" aria-controls="nav-home" aria-selected="true">Оформить кредит</a>
                                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-contribution"
                                       role="tab" aria-controls="nav-profile" aria-selected="false">Сделать вклад</a>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-credit" role="tabpanel" aria-labelledby="nav-credit-tab">
                                    <ul className="nav nav-pills mb-3 mt-3" id="pills-tab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="pills-person-tab" data-toggle="pill"
                                               href="#pills-person" role="tab" aria-controls="pills-person"
                                               aria-selected="true">Физическое лицо</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-entity-tab" data-toggle="pill"
                                               href="#pills-entity" role="tab" aria-controls="pills-entity"
                                               aria-selected="false">Юридическое лицо</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <PersonalCredit/>
                                        <EntityCredit/>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-contribution" role="tabpanel" aria-labelledby="nav-contribution-tab">
                                    <Contribution/>
                                </div>
                            </div>
                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/*if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}*/
