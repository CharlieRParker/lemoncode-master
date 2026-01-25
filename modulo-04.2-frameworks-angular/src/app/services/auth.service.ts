import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isLoggedIn = false;
    private username = '';

    login(credentials: { username: string; password: string }): boolean {
        if (credentials.username === 'master@lemoncode.net' && credentials.password === '12345678') {
            this.isLoggedIn = true;
            this.username = credentials.username;
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', this.username);
            return true;
        }
        return false;
    }

    logout(): void {
        this.isLoggedIn = false;
        this.username = '';
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
    }

    isLogged(): boolean {
        return this.isLoggedIn || localStorage.getItem('isLoggedIn') === 'true';
    }

    getUsername(): string {
        return this.username || localStorage.getItem('username') || '';
    }
}