
# GIGIH Fake Spotify 

* [Playlist](#Playlist)

  * [Create](#1-create-song)
  * [All](#2-all-song)
  * [Filter](#3-filter-playlist)
  * [Specific](#4-specific-song)
  * [Update](#5-update-song)
  * [Delete](#6-delete-song)

## Playlist

### 1. Create song

***Endpoint:***
```bash
Method: POST
URL: http://localhost:8080/api/playlist
```

***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| title | "As It Was" | String |
| artists | ["Harry", "Styles"] | Array |
| url | https://spotify.com/as-it-was | String |

***Response:***
```js
{
  "message": "Song added successfully",
  "data": {
    "id": 52579,
    "title": "As It Was",
    "artists": [
      "Harry Styles"
    ],
    "url": "https://spotify.com/as-it-was",
    "listen": 0,
    "timestamp": "2023-07-19T15:50:23.829Z"
  }
}
```

***Status Code:*** 200


### 2. All Song

***Endpoint:***
```bash
Method: GET
URL: http://localhost:8080/api/playlist
```

***Response:***
```js
{
  "message": "Successfully fetched playlist",
  "data": [
    {
      "id": 52579,
      "title": "As It Was",
      "artists": [
        "Harry Styles"
      ],
      "url": "https://spotify.com/as-it-was",
      "listen": 0,
      "timestamp": "2023-07-19T15:50:23.829Z"
    },
    {
      "id": 99175,
      "title": "Viva La Vida",
      "artists": [
        "coldplay"
      ],
      "url": "https://spotify.com/viva-la-vida",
      "listen": 0,
      "timestamp": "2023-07-19T15:56:57.114Z"
    }
  ]
}
```

***Status Code:*** 200


### 3. filter playlist

***Endpoint:***
```bash
Method: GET
URL: http://localhost:8080/api/playlist?filter=most-listened
```

***Filter Option:***
```
most-listened/latest/oldest
```

***Response:***
```js
{
  "message": "Successfully fetched playlist",
  "data": [
    {
      "id": 99175,
      "title": "Viva La Vida",
      "artists": [
        "coldplay"
      ],
      "url": "https://spotify.com/viva-la-vida",
      "listen": 10,
      "timestamp": "2023-07-19T15:56:57.114Z"
    },
    {
      "id": 52579,
      "title": "As It Was",
      "artists": [
        "Harry Styles"
      ],
      "url": "https://spotify.com/as-it-was",
      "listen": 7,
      "timestamp": "2023-07-19T15:50:23.829Z"
    }
  ]
}
```

***Status Code:*** 200


### 4. specific song

***Endpoint:***
```bash
Method: GET
URL: http://localhost:8080/api/playlist/:id
```

***Response:***
```js
{
  "message": "successfully fetched a song",
  "data": {
    "id": 99175,
    "title": "Viva La Vida",
    "artists": [
      "coldplay"
    ],
    "url": "https://spotify.com/viva-la-vida",
    "listen": 11,
    "timestamp": "2023-07-19T15:56:57.114Z"
  }
}
```

***Status Code:*** 200


### 5. Update song

***Endpoint:***
```bash
Method: PUT
URL: http://localhost:8080/api/playlist/:id
```

***Body:***
| Key | Value | Description |
| --- | ------|-------------|
| title | "As It Was" | String |
| artists | ["Harry Styles", "Boyce Avenue"] | Array |
| url | https://spotify.com/as-it-was | String |

***Response:***
```js
{
  "message": "song updated successfully",
  "data": {
    "id": 52579,
    "title": "As It Was",
    "artists": [
      "Harry Styles",
      "Boyce Avenue"
    ],
    "url": "https://spotify.com/as-it-was",
    "listen": 7,
    "timestamp": "2023-07-19T15:50:23.829Z"
  }
}
```

***Status Code:*** 201


### 6. Delete Song

***Endpoint:***
```bash
Method: DELETE
URL: http://localhost:8080/api/playlist/:id
```

***Response:***
```js
{
  "message": "Song deleted successfully",
  "data": {
    "id": 52579,
    "title": "As It Was",
    "artists": [
      "Harry Styles",
      "Boyce Avenue"
    ],
    "url": "https://spotify.com/as-it-was",
    "listen": 7,
    "timestamp": "2023-07-19T15:50:23.829Z"
  }
}
```

***Status Code:*** 200