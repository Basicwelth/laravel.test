<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClientController extends Controller
{
    public function index(){
        return view('home');
    }

    public function addCreditPerson(Request $request){
        DB::insert("INSERT INTO client_credit (lastname, firstname, surname, inn, birthday, passNum, passDate, amount, pay, startDate, finDate, period) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
            [$request->input('lastName'),$request->input('firstName'),$request->input('surName'),
                $request->input('inn'),$request->input('birthday'),$request->input('passNum'),
                $request->input('passDate'),$request->input('amount'),$request->input('pay'),
                $request->input('startDate'),$request->input('finDate'),$request->input('period')]);
    }

    public function addCreditEntity(Request $request){
        DB::insert("INSERT INTO entity_credit (lastname, firstname, surname, inn, orgName, address, ogrn, innOrg, kppOrg, amount, pay, startDate, finDate, period) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [$request->input('lastName'), $request->input('firstName'), $request->input('surName'),
                $request->input('inn'), $request->input('orgName'), $request->input('address'),
                $request->input('oGrn'), $request->input('innOrg'), $request->input('kppOrg'),
                $request->input('amount'), $request->input('pay'), $request->input('startDate'),
                $request->input('period'),$request->input('finDate')]);
    }

    public function addContribution(Request $request){
        DB::insert("INSERT INTO client_contribution (lastname, firstname, surname, inn, birthday, passNum, passDate, rate, pay, startDate, finDate, period) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
            [$request->input('lastName'),$request->input('firstName'),$request->input('surName'),
                $request->input('inn'),$request->input('birthday'),$request->input('passNum'),
                $request->input('passDate'),$request->input('rate'),$request->input('pay'),
                $request->input('startDate'),$request->input('finDate'),$request->input('period')]);
    }

}
