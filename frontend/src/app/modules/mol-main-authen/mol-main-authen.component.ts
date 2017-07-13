import { Component, OnInit } from '@angular/core';
import { CredentialService } from "../../services/credential.service";
import { User } from "../../models/User";

@Component({
    selector: 'mol-main-authen',
    templateUrl: './mol-main-authen.component.html'
})

export class MolMainAuthenComponent implements OnInit {
    user: User;
    constructor(private _credential: CredentialService) { 
        this.user = new User("","","user1@email.com","","123456");
        this._credential.doCredential('user1@email.com','123456');
        setTimeout(()=>{
            if(this._credential.getLoggedUser()!= undefined) console.log('Login success')
        },1000);
    }
    onCredential(){
        this._credential.doCredential(this.user.email, this.user.password);
        setTimeout(()=>{
            if(this._credential.getLoggedUser()!= undefined) console.log('Login success')
        },1000);
    }
    ngOnInit() { }
}