import React, { Component } from 'react';
import Moment from 'moment';
import Axios from 'axios';
import InputMask from 'react-input-mask';

class Contribution extends Component{
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
            rate:"0.08",
            pay:"0",
            startDate:"",
            period:"",
            finDate:""

        };
        this.processRequest1 = this.processRequest1.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.sumDat = this.sumDat.bind(this);
    }
    handleChange1(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    processRequest1(event){
        let empObj={
            lastName:"",
            firstName:"",
            surName:"",
            inn:"",
            birthday:"",
            passNum:"",
            passDate:"",
            rate:"0.08",
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
            let rate = parseFloat(this.state.rate);
            let pay = parseInt(this.state.pay, 10);
            let period = parseInt(this.state.period, 10);
            Axios({
                method: 'post',
                url: '/contribution-client',
                data: {
                    lastName: this.state.lastName,
                    firstName: this.state.firstName,
                    surName:this.state.surName,
                    inn:this.state.inn,
                    birthday:this.state.birthday,
                    passNum:this.state.passNum,
                    passDate:this.state.passDate,
                    rate:rate,
                    pay:pay,
                    startDate:this.state.startDate,
                    period:period,
                    finDate:this.state.finDate
                }
            });
        }
    }
    sumDat(event){
        this.setState({period: event.target.value});
        let curDate = new Date(this.state.startDate);
        let date = Moment().set({'year': curDate.getFullYear(), 'month': curDate.getMonth(),'day':curDate.getDay()}).add(event.target.value,'months').format("YYYY-MM-DD").toLocaleString();
        this.setState({finDate: date});
    }
    render() {
        return(
            <div className="mt-4">
                <form className="needs-validation" noValidate onSubmit={this.processRequest1}>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom01">Фамилия</label>
                            <input type="text" className="form-control" id="validationCustom01" name="lastName" value={this.state.lastName} onChange={this.handleChange1} required/>
                            <div className="valid-feedback">
                                Форма заполнена.
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom02">Имя</label>
                            <input type="text" className="form-control" id="validationCustom02" name="firstName" value={this.state.firstName} onChange={this.handleChange1} required/>
                            <div className="valid-feedback">
                                Форма заполнена.
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom03">Отчество</label>
                            <input type="text" className="form-control" id="validationCustom03" name="surName" value={this.state.surName} onChange={this.handleChange1} required/>
                            <div className="valid-feedback">
                                Форма заполнена.
                            </div>
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom04">ИНН</label>
                            <InputMask type="text" className="form-control" id="validationCustom04" name="inn" value={this.state.inn} onChange={this.handleChange1} mask="999-999-999-999" alwaysShowMask={true} required/>
                            <div className="invalid-feedback">
                                Вы не ввели ваш ИНН.
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor="validationCustom05">Дата рождения</label>
                            <input type="date" className="form-control" id="validationCustom05" name="birthday" value={this.state.birthday} onChange={this.handleChange1} required/>
                            <div className="invalid-feedback">
                                Вы не ввели вашу дату рождения.
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom06">Серия и номер паспорта</label>
                            <InputMask type="text" className="form-control" id="validationCustom06" name="passNum" mask="99-99 999999" alwaysShowMask={true} value={this.state.passNum} onChange={this.handleChange1} required/>
                            <div className="invalid-feedback">
                                Введите ваши серию и номер паспорта.
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor="validationCustom07">Дата выдачи</label>
                            <input type="date" className="form-control" id="validationCustom07" name="passDate" value={this.state.passDate} onChange={this.handleChange1} required/>
                            <div className="invalid-feedback">
                                Не введена ваша дата выдачи паспорта.
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2 mb-3">
                            <label htmlFor="validationCustom08">Ставка(%)</label>
                            <select className="custom-select" name="rate" onChange={this.handleChange1} value={this.state.rate}>
                                <option value="0.08">8 %</option>
                                <option value="0.15">15 %</option>
                            </select>
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor="validationCustom09">Дата открытия</label>
                            <input type="date" className="form-control" id="validationCustom09" name="startDate" value={this.state.startDate} onChange={this.handleChange1} required/>
                            <div className="invalid-feedback">
                                Не введена дата начала.
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor="validationCustom10">Срок вклада(мес)</label>
                            <input type="number" min="1" max="100" className="form-control" id="validationCustom10" value={this.state.period} onChange={this.sumDat} required/>
                            <div className="invalid-feedback">
                                Введите срок выплаты.
                            </div>
                        </div>
                        <div className="col-md-2 mb-3">
                            <label htmlFor="validationCustom11">Дата закрытия</label>
                            <input type="date" className="form-control" id="validationCustom11" required value={this.state.finDate} readOnly={true}/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom12">Периодичность капитализации</label>
                            <select className="custom-select" name="pay" onChange={this.handleChange1} value={this.state.pay}>
                                <option value="0">В конце срока</option>
                                <option value="1">Ежемесячно</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Отправить заявку</button>
                </form>
            </div>
        );
    }
}
export default Contribution;
