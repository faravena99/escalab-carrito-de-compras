import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { GamesService } from '../../services/games.service'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @Input() data:any;
  @Input() indexElement:any;
  game:any;  
  @Output() gameDelete: EventEmitter<any>;

  constructor(private srvGames: GamesService ) { 
    this.gameDelete = new EventEmitter();
  }

  ngOnInit(): void {
    this.game = this.srvGames.getGame(this.data)
  }

  deleteElement(index:any){     
    this.gameDelete.emit(index);
  }

}
