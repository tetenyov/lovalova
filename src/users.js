const usersList = [
  {
    id: "785233571479", 
    gender: "male", 
    age: 29, 
    hairColor: "red", 
    height: "medium",
    name: 'Ellis Minarik'
  },
  {
    id: "1304922355654", 
    gender: "female", 
    age: 34, 
    hairColor: "brown", 
    height: "medium",
    name: 'Jasmin Greaney'
  },
  {
    id: "992965310328", 
    gender: "male", 
    age: 35, 
    hairColor: "brown", 
    height: "low",
    name: 'Matthew Hedin'
  },
  {
    id: "200079836465", 
    gender: "female", 
    age: 33, 
    hairColor: "brown", 
    height: "medium",
    name: 'Ivette Winston'
  },
  {
    id: "1380256758320", 
    gender: "male", 
    age: 39, 
    hairColor: "brunet", 
    height: "medium",
    name: 'Oswaldo Mayen'
  },
  {
    id: "1205198801239", 
    gender: "female", 
    age: 25, 
    hairColor: "brown", 
    height: "medium",
    name: 'Skye Moorman'
  },
  {
    id: "607912383354", 
    gender: "male", 
    age: 36, 
    hairColor: "red", 
    height: "low",
    name: 'Herb Garlow'
  },
  {
    id: "1061988876703", 
    gender: "female", 
    age: 49, 
    hairColor: "brunet", 
    height: "medium",
    name: 'Terresa Chevere'
  },
  {
    id: "1252924034673", 
    gender: "male", 
    age: 45, 
    hairColor: "brunet", 
    height: "low",
    name: 'Nick Fairman'
  },
  {
    id: "157638706737", 
    gender: "female", 
    age: 48, 
    hairColor: "brown", 
    height: "low",
    name: 'Melodie Proffit'
  },
  {
    id: "1291345896809", 
    gender: "male", 
    age: 33, 
    hairColor: "brown", 
    height: "low",
    name: 'Ellis Minarik'
  },
  {
    id: "1599813062941", 
    gender: "female", 
    age: 36, 
    hairColor: "brown", 
    height: "low",
    name: 'Marisha Meissner'
  },
  {
    id: "1084682904120", 
    gender: "male", 
    age: 20, 
    hairColor: "red", 
    height: "medium",
    name: 'Jerrell Schnitzer'
  },
  {
    id: "1170804389663", 
    gender: "female", 
    age: 23, 
    hairColor: "red", 
    height: "low",
    name: 'Saturnina Ivey'
  }, 
  {
    id: "180046993467", 
    gender: "male", 
    ge: 36, 
    hairColor: "red", 
    height: "low",
    name: 'Brice Bourassa'
  },
  {
    id: "179853706219", 
    gender: "female", 
    age: 19, 
    hairColor: "brown", 
    height: "low",
    name: 'Alyson Sheikh'
  },
  {
    id: "290471005385", 
    gender: "male", 
    age: 28, 
    hairColor: "red", 
    height: "medium",
    name: 'Osvaldo Fazekas'
  },
  {
    id: "1264886522731", 
    gender: "female", 
    age: 29, 
    hairColor: "brunet", 
    height: "medium",
    name: 'Nora Rascoe'
  },
  {
    id: "913113911190", 
    gender: "male", 
    age: 34, 
    hairColor: "red", 
    height: "low",
    name: 'Joan Markley'
  },
  {
    id: "592485606649", 
    gender: "female", 
    age: 49, 
    hairColor: "brown", 
    height: "medium",
    name: 'Gaynell Kleiman'
  },
  {
    id: "790547889353", 
    gender: "male", 
    age: 19, 
    hairColor: "brunet",
    height: "medium",
    name: 'Ernesto Policastro'
  },
  {
    id: "1539271417015", 
    gender: "female", 
    age: 36, 
    hairColor: "brunet", 
    height: "medium",
    name: 'Joette Bundren'
  },
  {
    id: "298075500746", 
    gender: "male", 
    age: 33, 
    hairColor: "brown", 
    height: "medium",
    name: 'Adan Marshall'
  },
  {
    id: "1276231406420", 
    gender: "female", 
    age: 30, 
    hairColor: "brunet", 
    height: "medium",
    name: 'Keesha Vrba'
  },
  {
    id: "289407273466", 
    gender: "male", 
    age: 42, 
    hairColor: "brown", 
    height: "medium",
    name: 'John Digweed'
  },
  {
    id: "485645606305", 
    gender: "female", 
    age: 44, hairColor: "brown", 
    height: "medium",
    name: 'Zulma Adamson'
  },
  {
    id: "127986116501", 
    gender: "male", 
    age: 22, 
    hairColor: "red", 
    height: "low",
    name: 'Demetrius Mcmillin'
  },
  {
    id: "150063134174", 
    gender: "female", 
    age: 30, 
    hairColor: "red", 
    height: "medium",
    name: 'Shaunda Raschke'
  },
  {
    id: "100155872419", 
    gender: "male", 
    age: 32, 
    hairColor: "red", 
    height: "low",
    name: 'Cortez Renzi'
  },
  {
    id: "89352988227", 
    gender: "female", 
    age: 42, 
    hairColor: "red", 
    height: "medium",
    name: 'Cheyenne Dalessio'
  }
]

usersList.forEach(user => user.photo = `/img/${user.id}.jpg`)

export default usersList