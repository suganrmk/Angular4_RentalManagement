import { Component, OnInit } from '@angular/core';

import { UserService } from '../provider/index';

@Component({
    moduleId: module.id,
    templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {
    currentUser: any;
    users: any[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers(); });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; console.log(users) });
    }
}
