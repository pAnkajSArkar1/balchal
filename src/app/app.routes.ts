import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Yuva Sampark | Connect • Engage • Serve | BJP Yuva Morcha Tripura'
  },
  {
    path: 'register',
    loadComponent: () => import('./features/register/register.component').then(m => m.RegisterComponent),
    title: 'Member & Volunteer Registration | Yuva Sampark'
  },
  {
    path: 'blood-donation',
    loadComponent: () => import('./features/blood-donation/blood-donation.component').then(m => m.BloodDonationComponent),
    title: 'Emergency Blood Network | Yuva Sampark'
  },
  {
    path: 'opportunities',
    loadComponent: () => import('./features/opportunities/opportunities.component').then(m => m.OpportunitiesComponent),
    title: 'Tripura Youth Schemes & Opportunities Hub | Yuva Sampark'
  },
  {
    path: 'events',
    loadComponent: () => import('./features/events/events.component').then(m => m.EventsComponent),
    title: 'Events & Community Service | Yuva Sampark'
  },
  {
    path: 'security',
    loadComponent: () => import('./features/security/security.component').then(m => m.SecurityComponent),
    title: 'Trust & DPDP Compliance | Yuva Sampark'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'About & Leadership | Yuva Sampark'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
    title: 'Dashboard | Yuva Sampark'
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent),
    title: 'Login | Yuva Sampark'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
