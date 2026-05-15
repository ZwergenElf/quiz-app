import { Component, OnInit } from '@angular/core';
export type Player = {
  name: string;
  score: number;
};

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
  standalone: false,
})
export class ScoreboardComponent implements OnInit {
  players: Player[] = [];
  points = [200, 400, 600, 800];

  givePoints = true;

  displayedColumnsPlayers: string[] = ['player', 'score', 'scoreActions'];

  ngOnInit(): void {
    let id = 1;
    for (let i = 0; i < 4; i++) {
      this.players.push({
        name: `Ameise ${id}`,
        score: 0,
      });
      id++;
    }
  }
  calcPointsToPlayer(playerName: string, points: number): void {
    const player = this.players.find((player) => player.name === playerName);
    if (!player) {
      return;
    }

    if (this.givePoints) {
      player.score += points;
    } else {
      player.score -= points;
    }
  }

  setPoints(playerName: string, points: number): void {
    const player = this.players.find((player) => player.name === playerName);
    if (!player) {
      return;
    }
    player.score = points;
  }

  togglePointCalcOperation(): void {
    this.givePoints = !this.givePoints;
  }
}
