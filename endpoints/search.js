const fs = require('fs');
let rawdata = fs.readFileSync('games.json');
let games = JSON.parse(rawdata);

exports.get_games = async (req, res) => {
    try{
        const games_by_title_data = await games_by_title(games, req.body.title)
        if (games_by_title_data === undefined) {
            res.status(400).send(`Sorry ${req.body.title} does not exists`)
        } else{
            res.json(games_by_title_data)
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
};

const games_by_title = async(games, game_title) => {
    try{
        if (games.length === 0 || Array.isArray(games) === false) {
            console.log("ERROR: Games is of wrong type")
            throw Error("Games is of wrong type")
        }
        for (var i = 0; i < games.length; i ++) {
            if (games[i].title == game_title) {
                return games[i]
            }
        }
        return undefined
    } catch(error) {
        console.error("ERROR: Failed to get title due to: ", error);
        throw error
    }
};