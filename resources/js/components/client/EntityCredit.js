import React, { Component } from 'react';
import Moment from 'moment';
import Axios from 'axios';
import InputMask from 'react-input-mask';

class EntityCredit extends Component{
    constructor(props){
        super(props);
        this.state = {
            lastName:"",
            firstName:"",
            surName:"",
            inn:"",
            orgName:"",
            address:"",
            oGrn:"",
            innOrg:"",
            kppOrg:"",
            amount:"",
            pay:"0",
            startDate:"",
            period:"",
            finDate:""

        };
        this.processRequests = this.processRequests.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        this.sumDates = this.sumDates.bind(this);
    }
    handleChanges(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    processRequests(event){
        let empObj={
            lastName:"",
            firstName:"",
            surName:"",
            inn:"",
            orgName:"",
            address:"",
            oGrn:"",
            innOrg:"",
            kppOrg:"",
            amount:"",
            pay:"0",
            startDate:"",
            period:"",
            finDate:""

        };
        event.preventDefault();
        if (JSON.stringify(this.state)===JSON.stringify(empObj)){
            event.preventDefault();
        }
        else {
            let amount = parseInt(this.state.amount, 10);
            let pay = parseInt(this.state.pay, 10);
            let period = parseInt(this.state.period, 10);
            let oGrn = parseInt(this.state.oGrn, 10);
            let innOrg = parseInt(this.state.innOrg, 10);
            let kppOrg = parseInt(this.state.kppOrg, 10);
            Axios({
                method: 'post',
                url: '/credit-entity',
                data: {
                    lastName: this.state.lastName,
                    firstName: this.state.firstName,
                    surName:this.state.surName,
                    inn:this.state.inn,
                    orgName:this.state.orgName,
                    address:this.state.address,
                    oGrn:oGrn,
                    innOrg:innOrg,
                    kppOrg:kppOrg,
                    amount:amount,
                    pay:pay,
                    startDate:this.state.startDate,
                    period:period,
                    finDate:this.state.finDate
                }
            });
        }
    }
    sumDates(event){
        this.setState({period: event.target.value});
        let curDate = new Date(this.state.startDate);
        let date = Moment().set({'year': curDate.getFullYear(), 'month': curDate.getMonth(),'day':curDate.getDay()}).add(event.target.value,'months').format("YYYY-MM-DD").toLocaleString();
        this.setState({finDate: date});
    }
    render() {
        return(
            <div className="tab-pane fade show" id="pills-entity" role="tabpanel" aria-labelledby="pills-entity-tab">
                <form className="needs-validation" noValidate onSubmit={this.processRequests}>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom01">Фамилия</label>
                            <input type="text" className="form-control" id="validationCustom01" name="lastName" value={this.state.lastName} onChange={this.handleChanges} required/>
                            <div className="valid-feedback">
                                Введите вашу фамилию.
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom02">Имя</label>
                            <input type="text" className="form-control" id="validationCustom02" name="firstName" value={this.state.firstName} onChange={this.handleChanges} required/>
                            <div className="valid-feedback">
                                Введите ваше имя.
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom03">Отчество</label>
                            <input type="text" className="form-control" id="validationCustom03" name="surName" value={this.state.surName} onChange={this.handleChanges} required/>
                            <div className="valid-feedback">
                                Введите ваше отчество.
                            </div>
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom04">ИНН</label>
                            <InputMask type="text" className="form-control" id="validationCustom04" name="inn" value={this.state.inn} onChange={this.handleChanges} mask="999-999-999-999" alwaysShowMask={true} required/>
                            <div className="invalid-feedback">
                                Вы не ввели ваш ИНН.
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom05">Название организации</label>
                            <input type="text" className="form-control" id="validationCustom05" name="orgName" value={this.state.orgName} onChange={this.handleChanges} required/>
                            <div className="invalid-feedback">
                                Вы не ввели название организации.
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom06">Адрес организации</label>
                            <input type="text" className="form-control" id="validationCustom06" name="address" value={this.state.address} onChange={this.handleChanges} required/>
                            <div className="invalid-feedback">
                                Вы не ввели адрес организации.
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom07">ОГРН</label>
                            <InputMask type="text" className="form-control" id="validationCustom07" name="oGrn" value={this.state.oGrn} onChange={this.handleChanges} mask="9999999999999" alwaysShowMask={true} required/>
                            <div className="invalid-feedback">
                                Вы не ввели ОГРН организации.
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom08">ИНН организации</label>
                            <InputMask type="text" className="form-control" id="validationCustom08" name="innOrg" value={this.state.innOrg} onChange={this.handleChanges} mask="9999999999" alwaysShowMask={true} required/>
                            <div className="invalid-feedback">
                                Вы не ввели ИНН организации.
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom09">КПП организации</label>
                            <InputMask type="text" className="form-control" id="validationCustom09" name="kppOrg" value={this.state.kppOrg} onChange={this.handleChanges} mask="999999999" alwaysShowMask={true} required/>
                            <div className="invalid-feedback">
                                Вы не ввели КПП организации.
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom10">Сумма кредита(руб)</label>
                            <input type="number" min="10000" className="form-control" id="validationCustom10" name="amount" value={this.state.amount} onChange={this.handleChanges} required/>
                            <div className="invalid-feedback">
                                Вы не ввели сумму кредита.
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor="validationCustom11">Начало выплат</label>
                            <input type="date" className="form-control" id="validationCustom11" name="startDate" value={this.state.startDate} onChange={this.handleChanges} required/>
                            <div className="invalid-feedback">
                                Не введена дата начала.
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor="validationCustom12">Срок выплаты(мес)</label>
                            <input type="number" min="1" max="100" className="form-control" id="validationCustom12" value={this.state.period} onChange={this.sumDates} required/>
                            <div className="invalid-feedback">
                                Введите срок выплаты.
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor="validationCustom13">Дата закрытия</label>
                            <input type="date" className="form-control" id="validationCustom13" required value={this.state.finDate} readOnly={true}/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom04">Вид платежа</label>
                            <select className="custom-select" name="pay" onChange={this.handleChanges} value={this.state.pay}>
                                <option value="0">Аннуитетный</option>
                                <option value="1">Дифференцированный</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Отправить заявку</button>
                </form>
            </div>
        );
    }
}
export default EntityCredit;
