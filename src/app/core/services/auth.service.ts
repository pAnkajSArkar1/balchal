import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type UserRole = 'Super Admin' | 'State Admin' | 'District Admin' | 'Mandal Admin' | 'Member';

export interface UserSession {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  assignedDistrict?: string;
  assignedMandal?: string;
  badge: string;
  avatarUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<UserSession | null>({
    id: 'USR-TR-001',
    name: 'Sushanta Deb',
    email: 'sushanta.deb@tripura.org',
    phone: '+91 94361 00192',
    role: 'State Admin',
    assignedDistrict: 'West Tripura',
    assignedMandal: 'Agartala (Town)',
    badge: 'Tripura State Executive',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  });

  currentUser$: Observable<UserSession | null> = this.currentUserSubject.asObservable();

  get currentUser(): UserSession | null {
    return this.currentUserSubject.value;
  }

  login(role: UserRole = 'State Admin', district = 'West Tripura', mandal = 'Agartala (Town)'): void {
    const user: UserSession = {
      id: `USR-${Math.floor(100 + Math.random() * 900)}`,
      name: role === 'Member' ? 'Prasenjit Bhowmik' : 'Biplab Kr. Debbarma',
      email: role === 'Member' ? 'prasenjit.b@tripura.org' : 'state.admin@tripura.org',
      phone: '+91 98621 11200',
      role: role,
      assignedDistrict: district,
      assignedMandal: mandal,
      badge: `${role} - Tripura`,
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    };
    this.currentUserSubject.next(user);
  }

  logout(): void {
    this.currentUserSubject.next(null);
  }

  switchRole(role: UserRole): void {
    if (!this.currentUser) {
      this.login(role);
      return;
    }
    this.currentUserSubject.next({
      ...this.currentUser,
      role: role,
      badge: `${role} - Tripura`
    });
  }
}

