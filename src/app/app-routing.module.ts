import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssistanceComponent } from './assistance/assistance.component';
import { DownloadsComponent } from './assistance/downloads/downloads.component';
import { FaqsComponent } from './assistance/faqs/faqs.component';
import { GrievancesComponent } from './assistance/grievances/grievances.component';
import { HowToInvestWithUsComponent } from './assistance/how-to-invest-with-us/how-to-invest-with-us.component';
import { LoginInComponent } from './assistance/login-in/login-in.component';
import { BackboneComponent } from './backbone/backbone.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DifferenceComponent } from './difference/difference.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { DisclosureComponent } from './disclosure/disclosure.component';
import { HomeComponent } from './home/home.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { InvestmentProcessComponent } from './investment-process/investment-process.component';
import { InvestorFaqComponent } from './investor-faq/investor-faq.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { PmsfaqComponent } from './pmsfaq/pmsfaq.component';
import { ResourcesComponent } from './resources/resources.component';
import { RiskManagementComponent } from './risk-management/risk-management.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'index', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'backbone', component: BackboneComponent },
  { path: 'difference', component: DifferenceComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'disclosure', component: DisclosureComponent },
  { path: 'faqs', component: FaqsComponent },
  {
    path: 'assistance',
    component: AssistanceComponent,
  },
  { path: 'inspiration', component: InspirationComponent },
  { path: 'philosophy', component: PhilosophyComponent },
  { path: 'pmsfaq', component: PmsfaqComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'risk-management', component: RiskManagementComponent },
  { path: 'investment-process', component: InvestmentProcessComponent },
  { path: 'how-to-invest-with-us', component: HowToInvestWithUsComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'grievances', component: GrievancesComponent },
  { path: 'investor-faq', component: InvestorFaqComponent },
  { path: 'login-in', component: LoginInComponent },
  { path: 'resources', loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) },
  { path: '**', component: NotFoundComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
