function songs(array) {

    class Song {

        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songArray = [];

    let songCount = array.shift();
    let searchType = array.pop();

    for (let currentSong = 1; currentSong <= songCount; currentSong++) {

        let songString = array.shift();
        let [typeList, name, time] = songString.split('_');

        let song = new Song(typeList, name, time);
        songArray.push(song);

    }

    if (searchType === 'all') {

        for (let songString of songArray) {
            console.log(songString.name);
        }

    } else {

        let filteredSongs = songArray
            .filter(song_ => song_.typeList === searchType);

        for (let song of filteredSongs) {
            console.log(song.name);
        }
    }
}



songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);


songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);


songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);