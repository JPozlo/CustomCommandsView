import { CommandService } from './../_services/command.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit{
  commands = null
  isDeleting: boolean

  constructor(private commandService: CommandService){}

  ngOnInit() {
           this.commandService.getAllCommands()
            .pipe(first())
            .subscribe(commands => this.commands = commands);
  }

    deleteCommand(id: string) {
        const command = this.commands.find(x => x.id === id);
        command.isDeleting = true;
        this.commandService.deleteCommand(id)
            .pipe(first())
            .subscribe(() => this.commands = this.commands.filter(x => x.id !== id));
    }
}
