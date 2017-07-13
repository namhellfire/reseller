import { Injectable } from '@angular/core';
import { Users } from "../mocks/mock-users";
import { User } from "../models/User";
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CredentialService {
    loggedUser : User;
    constructor(private _http: Http) { }
    getUsers(): Promise<User[]> {
        return Promise.resolve(Users);
    }
    getLoggedUser(){
        return this.loggedUser;
    }
    setLoggedUser(user: User){
        this.loggedUser = user;
    }
    doCredential(email: string, password: string) {
        let isExists = undefined;
        this.getUsers().then(resp => {
            resp.forEach((element) => {
                if (element['email'] == email && element['password'] == password) {
                    isExists = element;
                    this.setLoggedUser(element);
                    return;
                }
            });
        });
    }
    getUserCredential(user: User){
        let url = "http://localhost:8000/credential/customer/login";
        this._http.post(url,user).toPromise().then(resp =>{
            console.log('User logged in');
            console.log(resp);
        })
    }
}