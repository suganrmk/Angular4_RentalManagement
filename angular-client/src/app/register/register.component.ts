import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, CommonService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private commonService: CommonService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.commonService.create('/users/register' , this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
