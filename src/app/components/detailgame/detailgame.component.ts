import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { GamesService } from '../../services/games.service'

@Component({
  selector: 'app-detailgame',
  templateUrl: './detailgame.component.html',
  styleUrls: ['./detailgame.component.css']
})
export class DetailgameComponent implements OnInit {

  game:any;
  constructor( private activateRouter: ActivatedRoute, private gamesService : GamesService ) {

    this.activateRouter.params.subscribe( data => {      
      this.game = this.gamesService.getGame(data['id']);
      console.log(this.game);
    });
   }

  ngOnInit(): void {
  }

}
