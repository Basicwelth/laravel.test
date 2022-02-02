import React, { Component } from 'react';
import Moment from 'moment';
import Axios from 'axios';
import InputMask from 'react-input-mask';

class PersonalCredit extends Component{
    constructor(props){
        super(props);
        this.state = {
            lastName:"",
            firstName:"",
            surName:"",
            inn:"",
            birthday:"",
            passNum:"",
            passDate:"",
            amount:"",
            pay:"0",
            startDate:"",
            period:"",
            finDate:""

        };
        this.processRequest = this.processRequest.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sumDate = this.sumDate.bind(this);
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    processRequest(event){
        let empObj={
            lastName:"",
            firstName:"",
            surName:"",
            inn:"",
            birthday:"",
            passNum:"",
            passDate:"",
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
            Axios({
                method: 'post',
                url: '/credit-client',
                data: {
                    lastName: this.state.lastName,
                    firstName: this.state.firstName,
                    surName:this.state.surName,
                    inn:this.state.inn,
                    birthday:this.state.birthday,
                    passNum:this.state.passNum,
                    passDate:this.state.passDate,
                    amount:amount,
                    pay:pay,
                    startDate:this.state.startDate,
                    period:period,
                    finDate:this.state.finDate
                }
            });
        }
    }
    sumDate(event){
        this.setState({period: event.target.value});
        let curDate = new Date(this.state.startDate);
        let date = Moment().set({'year': curDate.getFullYear(), 'month': curDate.getMonth(),'day':curDate.getDay()}).add(event.target.value,'months').format("YYYY-MM-DD").toLocaleString();
        this.setState({finDate: date});
    }
    render() {
        return(
            <div className="tab-pane fade show active" id="pills-person" role="tabpanel" aria-labelledby="pills-person-tab">
                <form className="needs-validation" noValidate onSubmit={this.processRequest}>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom01">Фамилия</label>
                            <input type="text" className="form-control" id="validationCustom01" name="lastName" value={this.state.lastName} onChange={this.handleChange} required/>
                            <div className="valid-feedback">
                                Введите вашу фамилию.
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom02">Имя</label>
                            <input type="text" className="form-control" id="validationCustom02" name="firstName" value={this.state.firstName} onChange={this.handleChange} required/>
                            <div className="valid-feedback">
                                Введите ваше имя.
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom03">Отчество</label>
                            <input type="text" className="form-control" id="validationCustom03" name="surName" value={this.state.surName} onChange={this.handleChange} required/>
                            <div className="valid-feedback">
                                Введите ваше отчество.
                            </div>
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom04">ИНН</label>
                            <InputMask type="text" className="form-control" id="validationCustom04" name="inn" value={this.state.inn} onChange={this.handleChange} mask="999-999-999-999" alwaysShowMask={true} required/>
                            <div className="invalid-feedback">
                                Вы не ввели ваш ИНН.
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor="validationCustom05">Дата рождения</label>
                            <input type="date" className="form-control" id="validationCustom05" name="birthday" value={this.state.birthday} onChange={this.handleChange} required/>
                            <div className="invalid-feedback">
                                Вы не ввели вашу дату рождения.
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom06">Серия и номер паспорта</label>
                            <InputMask type="text" className="form-control" id="validationCustom06" name="passNum" mask="99-99 999999" alwaysShowMask={true} value={this.state.passNum} onChange={this.handleChange} required/>
                            <div className="invalid-feedback">
                                Введите ваши серию и номер паспорта.
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor="validationCustom07">Дата выдачи</label>
                            <input type="date" className="form-control" id="validationCustom07" name="passDate" value={this.state.passDate} onChange={this.handleChange} required/>
                            <div className="invalid-feedback">
                                Не введена ваша дата выдачи паспорта.
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom08">Сумма кредита(руб)</label>
                            <input type="number" min="10000" className="form-control" id="validationCustom08" name="amount" value={this.state.amount} onChange={this.handleChange} required/>
                            <div className="invalid-feedback">
                                Вы не ввели сумму кредита.
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor="validationCustom09">Начало выплат</label>
                            <input type="date" className="form-control" id="validationCustom09" name="startDate" value={this.state.startDate} onChange={this.handleChange} required/>
                            <div className="invalid-feedback">
                                Не введена дата начала.
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor="validationCustom10">Срок выплаты(мес)</label>
                            <input type="number" min="1" max="100" className="form-control" id="validationCustom10" value={this.state.period} onChange={this.sumDate} required/>
                            <div className="invalid-feedback">
                                Введите срок выплаты.
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor="validationCustom11">Дата закрытия</label>
                            <input type="date" className="form-control" id="validationCustom11" required value={this.state.finDate} readOnly={true}/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom04">Вид платежа</label>
                            <select className="custom-select" name="pay" onChange={this.handleChange} value={this.state.pay}>
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
export default PersonalCredit;
