const mockData = {
    players: [
        { name: "Lionel Messi", team: "Inter Miami", position: "Forward", nationality: "Argentina" },
        { name: "Cristiano Ronaldo", team: "Al Nassr", position: "Forward", nationality: "Portugal" },
        { name: "Neymar Jr", team: "Al Hilal", position: "Forward", nationality: "Brazil" },
        { name: "Kylian Mbappé", team: "Paris Saint-Germain", position: "Forward", nationality: "France" },
        { name: "Kevin De Bruyne", team: "Manchester City", position: "Midfielder", nationality: "Belgium" },
        { name: "Virgil van Dijk", team: "Liverpool", position: "Defender", nationality: "Netherlands" },
        { name: "Luka Modric", team: "Real Madrid", position: "Midfielder", nationality: "Croatia" },
        { name: "Mohamed Salah", team: "Liverpool", position: "Forward", nationality: "Egypt" }
    ],
    matches: [
        { date: "2024-09-10", teams: "Argentina vs Brazil", score: "3-1" },
        { date: "2024-09-15", teams: "Spain vs Germany", score: "2-2" },
        { date: "2024-09-20", teams: "France vs Italy", score: "1-0" }
    ]
};

function displayPlayerInfo(players) {
    const playerContainer = document.getElementById('player-info');
    playerContainer.innerHTML = ''; // Clear previous content
    players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        playerCard.innerHTML = `<h2>${player.name}</h2>
                                <p>Team: ${player.team}</p>
                                <p>Position: ${player.position}</p>
                                <p>Nationality: ${player.nationality}</p>`;
        playerContainer.appendChild(playerCard);
    });
}

function displayMatchInfo(matches) {
    const matchContainer = document.getElementById('match-info');
    matchContainer.innerHTML = ''; // Clear previous content
    matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        matchCard.innerHTML = `<h2>Match Date: ${match.date}</h2>
                                <p>Teams: ${match.teams}</p>
                                <p>Score: ${match.score}</p>`;
        matchContainer.appendChild(matchCard);
    });
}

function filterPlayers() {
    const search = document.getElementById('player-search').value.toLowerCase();
    const filteredPlayers = mockData.players.filter(player => 
        player.name.toLowerCase().includes(search));
    displayPlayerInfo(filteredPlayers);
}

function filterMatches() {
    const search = document.getElementById('match-search').value.toLowerCase();
    const filteredMatches = mockData.matches.filter(match => 
        match.teams.toLowerCase().includes(search));
    displayMatchInfo(filteredMatches);
}

document.getElementById('player-search').addEventListener('input', filterPlayers);
document.getElementById('match-search').addEventListener('input', filterMatches);

// Initial display
if (document.getElementById('player-info')) {
    displayPlayerInfo(mockData.players);
}
if (document.getElementById('match-info')) {
    displayMatchInfo(mockData.matches);
}
