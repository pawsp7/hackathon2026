class gameInstance {
    private playerName: string;
    private day: number;

    constructor(playerName: string, day: number){
        this.playerName = playerName;
        this.day = day;
    }

    getPlayerName(): string{
        return this.playerName;
    }

    getDay(): number{
        return this.day;
    }

    setPlayerName(playerName: string){
        this.playerName = playerName;
    }

    setDay(day: number){
        this.day = day;
    }
}
