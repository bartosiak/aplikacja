export function createInitScore(setsCount) {
    const scoreArray = [];
    for (let i = 0; i < setsCount; i++) {
        scoreArray.push({ games: 0 });
    }
    return scoreArray;
}
