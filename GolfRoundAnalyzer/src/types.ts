export interface GolfRound {
    id?: number;
    courseName: string;
    datePlayed: string;
    score: number;
    fairwaysHit: number;
    fairwaysPossible: number;
    greensInRegulation: number;
    putts: number;
}