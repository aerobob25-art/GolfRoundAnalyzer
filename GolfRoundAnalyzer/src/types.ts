export interface GolfRound {
    id?: number;
    courseName: string;
    datePlayed: string;
    score: number;
    fairwaysHit: number;
    totalFairwaysPossible: number;
    greensInRegulation: number;
    putts: number;
}