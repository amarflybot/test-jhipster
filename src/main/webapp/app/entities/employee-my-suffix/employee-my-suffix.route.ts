import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { EmployeeMySuffixComponent } from './employee-my-suffix.component';
import { EmployeeMySuffixDetailComponent } from './employee-my-suffix-detail.component';
import { EmployeeMySuffixPopupComponent } from './employee-my-suffix-dialog.component';
import { EmployeeMySuffixDeletePopupComponent } from './employee-my-suffix-delete-dialog.component';

export const employeeRoute: Routes = [
    {
        path: 'employee-my-suffix',
        component: EmployeeMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Employees'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'employee-my-suffix/:id',
        component: EmployeeMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Employees'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const employeePopupRoute: Routes = [
    {
        path: 'employee-my-suffix-new',
        component: EmployeeMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Employees'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'employee-my-suffix/:id/edit',
        component: EmployeeMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Employees'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'employee-my-suffix/:id/delete',
        component: EmployeeMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Employees'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];