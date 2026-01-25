import { Injectable, signal, computed } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isLoggedInSignal = signal(false);
    private usernameSignal = signal('');

    isLoggedIn = computed(() => this.isLoggedInSignal() || localStorage.getItem('isLoggedIn') === 'true');
    username = computed(() => this.usernameSignal() || localStorage.getItem('username') || '');

    login(credentials: { username: string; password: string }): boolean {
        if (credentials.username === 'master@lemoncode.net' && credentials.password === '12345678') {
            this.isLoggedInSignal.set(true);
            this.usernameSignal.set(credentials.username);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', credentials.username);
            return true;
        }
        return false;
    }

    logout(): void {
        this.isLoggedInSignal.set(false);
        this.usernameSignal.set('');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
    }

    isLogged(): boolean {
        return this.isLoggedIn();
    }

    getUsername(): string {
        return this.username();
    }
}