if (Events.find().count() === 0) {
  Events.insert({
    title: 'Dominion',
    url: 'https://boardgamegeek.com/boardgame/36218/dominion'
  });

  Events.insert({
    title: 'Viceroy',
    url: 'https://boardgamegeek.com/boardgame/157526/viceroy'
  });

  Events.insert({
    title: 'Terra Mystica',
    url: 'https://boardgamegeek.com/boardgame/120677/terra-mystica'
  });
}
