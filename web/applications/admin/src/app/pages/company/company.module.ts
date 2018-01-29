import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CompanyRoutingModule} from './company-routing.module';
import {CreateCompanyComponent} from './create-company/create-company.component';
import {PrimeNgInputModule} from '../../external/prime-ng-input.module';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpRegisterNewCompanyUseCaseEndpointInvoker } from '@devbhuwan-salesmanager/sales-api';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    PrimeNgInputModule,
    ReactiveFormsModule
  ],
  declarations: [CreateCompanyComponent],
  exports: [CreateCompanyComponent],
  providers: [HttpRegisterNewCompanyUseCaseEndpointInvoker]
})
export class CompanyModule {
}
