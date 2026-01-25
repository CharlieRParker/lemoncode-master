import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent) },
    { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent) },
    { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent) },
    { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.DashboardComponent), canActivate: [AuthGuard] },
    { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery').then(m => m.GalleryComponent) },
    { path: 'crud', loadComponent: () => import('./pages/crud/crud').then(m => m.CrudComponent), canActivate: [AuthGuard] },
    { path: 'profile', loadComponent: () => import('./pages/profile/profile').then(m => m.ProfileComponent), canActivate: [AuthGuard] },
];
