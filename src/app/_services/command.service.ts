import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Command } from './../_models/command';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommandService {
  private commandSubject: BehaviorSubject<Command>;
  public command: Observable<Command>;

    constructor(
      private http: HttpClient
    ) {  }

  createCommand(command: Command) {
    return this.http.post(`${environment.apiUrl}/api/commands`, command);
  }

  updateCommand(id: String) {
    return this.http.get<Command>(`${environment.apiUrl}/api/commands/${id}`);
   }

  getAllCommands() {
    return this.http.get<Command[]>(`${environment.apiUrl}/api/commands`);
   }

  getCommand(id: String) {
    return this.http.get<Command>(`${environment.apiUrl}/api/commands/${id}`);
  }

  deleteCommand(id: String) {
    return this.http.delete(`${environment.apiUrl}/api/commands/${id}`);
  }
}
