## Intro and Design Database with MongoDB

1. Relasi _Skiljek_ dan Schema.
   Relasi: One-to-one

   Schema:

```json
{
  "_id": "ObjectId('124324ARADF')",
  "fullname": "Wahyu",
  "email": "wahyubarkas23@gmail.com",
  "phone": "081998446940"
}
```

2. Relasi _SkilShop_ dan Schema.

   Relasi : One-to-few

   Schema:

```json
{
  "_id": "ObjectId('12314ASDAD')",
  "fullname": "Deden",
  "phone": "082151558077",
  "address": [
    {
      "_id": "ObjectId('12314ASDAD')",
      "street_1": "Jl Kapt. Piere Tendean",
      "street_2": "Jl Mekarsari"
    },
    {
      "_id": "ObjectId('qw65e44qd564a')",
      "street_1": "Jl Martadinata",
      "street_2": "Jl Ahmad Yani"
    }
  ]
}
```

3. Relasi _SkilShop_ dan Schema

   Relasi: One-to-many

   Schema:

```json
{
  "_id": "ObjectId('8a90ds8a098d')",
  "product_name": "Kaos Polos",
  "brand": "SkilShirt",
  "varian": [
    {
      "_id": "ObjectId('678asd67as6d')",
      "varian_name": "Kaos Polos Biru",
      "color": "Biru",
      "qty": 12,
      "price": "Rp 80.000"
    },
    {
      "_id": "ObjectId('as789das8d89')",
      "varian_name": "Kaos Polos Tosca",
      "color": "Tosca",
      "qty": 10,
      "price": "Rp 80.000"
    }
  ]
}
```

4. Relasi _SkilFlix_ dan Schema

   Relasi: Many-to-many

   Schema:

   Cinema:

```json
[
{
    "_id": "ObjectId('Cinema623178')",
    "cinema_name": "XXI",
    "location": "Penta City Mall",
    "film": [{
        "_id": "ObjectId('6as8d7as7d')",
        "title": "Avengers : End Game"
    },{
        "_id": "ObjectId('7a89d7asd')",
        "title": "The Amazing Spiderman 2"


    },

    {
           "_id": "ObjectId('Cinema123131')",
    "cinema_name": "CGV",
    "location": "Plaza Balikpapan",
    "film": [{
        "_id": "ObjectId('6as8d7as7d')",
        "title": "Spiderman : Homecoming"
    },{
        "_id": "ObjectId('7a89d7asd')",
        "title": "Spiderman : Far From Home"
    }]
    }
    ]

```