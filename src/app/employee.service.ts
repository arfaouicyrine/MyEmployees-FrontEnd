import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs' ;

@Injectable({
    providedIn : 'root'
})
export class EmployeeService {

    private apiServerUrl ='';

    constructor (private http:HttpClient){
        
    }

}