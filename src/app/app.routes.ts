import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Yuva Morcha Tripura | Empowering Youth • Building a Stronger Future'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'About Us & Vision | Yuva Morcha Tripura'
  },
  {
    path: 'leadership',
    loadComponent: () => import('./features/leadership/leadership.component').then(m => m.LeadershipComponent),
    title: 'Leadership Directory & Hierarchy | Yuva Morcha Tripura'
  },
  {
    path: 'events',
    loadComponent: () => import('./features/events/events.component').then(m => m.EventsComponent),
    title: 'Membership & Events | Yuva Morcha Tripura'
  },
  {
    path: 'initiatives',
    loadComponent: () => import('./features/initiatives/initiatives.component').then(m => m.InitiativesComponent),
    title: 'Key Initiatives & Youth Schemes Hub | Yuva Morcha Tripura'
  },
  {
    path: 'news',
    loadComponent: () => import('./features/news/news.component').then(m => m.NewsComponent),
    title: 'News, Press Releases & Announcements | Yuva Morcha Tripura'
  },
  {
    path: 'media',
    loadComponent: () => import('./features/media/media.component').then(m => m.MediaComponent),
    title: 'Photo & Video Gallery | Yuva Morcha Tripura'
  },
  {
    path: 'districts',
    loadComponent: () => import('./features/districts/districts.component').then(m => m.DistrictsComponent),
    title: 'District & Mandal Directory | Yuva Morcha Tripura'
  },
  {
    path: 'contact-career',
    loadComponent: () => import('./features/contact-career/contact-career.component').then(m => m.ContactCareerComponent),
    title: 'Contact & Youth Career Opportunities | Yuva Morcha Tripura'
  },
  {
    path: 'register',
    loadComponent: () => import('./features/register/register.component').then(m => m.RegisterComponent),
    title: 'Join Us - Member & Volunteer Registration | Yuva Morcha Tripura'
  },
  {
    path: 'blood-donation',
    loadComponent: () => import('./features/blood-donation/blood-donation.component').then(m => m.BloodDonationComponent),
    title: 'Rakta Sampark - Emergency Blood Network | Yuva Morcha Tripura'
  },
  {
    path: 'opportunities',
    redirectTo: 'initiatives',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
