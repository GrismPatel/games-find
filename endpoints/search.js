const fs = require('fs');
let rawdata = fs.readFileSync('games.json');
let games = JSON.parse(rawdata);

exports.get_games = async (req, res) => {
    try{
        var games_by_title_data = await games_by_title(games, req.body.title)
        var index = 0
        if (req.body.index !== undefined) {
            index = parseInt(req.body.index)
        }
        if (games_by_title_data.length === 0) {
            res.status(200).send(`Sorry ${req.body.title} does not exists`)
        } else{
            res.json(games_by_title_data.slice(index, index +5))
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

        if (game_title === undefined || game_title == "" ){
            console.error("ERROR: Game to search cannot be empty")
            throw Error("Game to search cannot be empty")
        }
        var results = []
        for (var i = 0; i < games.length; i ++) {
            if (games[i].title.toLowerCase().includes(game_title.toLowerCase())) {
                results.push(games[i].title)
            }
        }
        return results
    } catch(error) {
        console.error("ERROR: Failed to get title due to: ", error);
        throw error
    }
};