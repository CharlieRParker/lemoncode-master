import { Injectable, signal, computed, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isLoggedInSignal = signal(false);
    private usernameSignal = signal('');

    isLoggedIn = computed(() => {
        if (isPlatformBrowser(this.platformId)) {
            return this.isLoggedInSignal() || localStorage.getItem('isLoggedIn') === 'true';
        }
        return this.isLoggedInSignal();
    });
    username = computed(() => {
        if (isPlatformBrowser(this.platformId)) {
            return this.usernameSignal() || localStorage.getItem('username') || '';
        }
        return this.usernameSignal();
    });

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    login(credentials: { username: string; password: string }): boolean {
        if (credentials.username === 'master@lemoncode.net' && credentials.password === '12345678') {
            this.isLoggedInSignal.set(true);
            this.usernameSignal.set(credentials.username);
            if (isPlatformBrowser(this.platformId)) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', credentials.username);
            }
            return true;
        }
        return false;
    }

    logout(): void {
        this.isLoggedInSignal.set(false);
        this.usernameSignal.set('');
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
        }
    }

    isLogged(): boolean {
        return this.isLoggedIn();
    }

    getUsername(): string {
        return this.username();
    }
}