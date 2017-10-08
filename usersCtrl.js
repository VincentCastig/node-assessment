const userData = require ('./userData')

module.exports = {

    getUsers: ( req, res, next ) => {
        let filteredData;
        if(req.query.age) {
            filteredData = userData.filter( (val) => {
                return val.age < req.query.age
            })
            res.status(200).send(filteredData)
        }
        else if(req.query.lastname) {
            filteredData = userData.filter( (val) => {
                return val.lastname === req.query.lastname
            })
            res.status(200).send(filteredData)
        }
        else if(req.query.email) {
            filteredData = userData.filter( (val) => {
                return val.email === req.query.email
            })
            res.status(200).send(filteredData)
        }
        else if(req.query.favorites) {
            filteredData = userData.filter( (val) => {
                return val.favorites.includes(req.query.favorites)
            })
            res.status(200).send(filteredData)
        }
        else{
            res.status(200).send(userData)
        }
    },

    getUserById: ( req, res, next ) => {
        for(data of userData){
            if(data.id = req.params.userId) {
                res.status(200).send(data)
            }
        }
        res.status(404).json(null)
    },

    getAdmins: ( req, res, next ) => {
        let filteredData;
            filteredData = userData.filter( (val) => {
                return val.type === 'admin' 
            })
            res.status(200).send(filteredData)
    },
    getNonAdmins: ( req, res, next ) => {
        let filteredData;
            filteredData = userData.filter( (val) => {
                return val.type !== 'admin' 
            })
            res.status(200).send(filteredData)
    },
    getUserByType: ( req, res, next ) => {
        let filteredData;
        filteredData = userData.filter( (val) => {
            return val.type === req.params.userType 
        })
        res.status(200).send(filteredData)  
    },

    putUserById: ( req, res, next ) => {
        const { id, first_name, last_name, email, gender, language, age, city, state, type, favorites } = req.body
        for(data of userData){
            if(data.id == req.params.userId) {
                if(id) {
                    data.id = id
                }
                if(first_name) {
                    data.first_name = first_name
                }
                if(last_name) {
                    data.last_name = last_name
                }
                if(email) {
                    data.email = email
                }
                if(gender) {
                    data.gender = gender
                }
                if(language) {
                    data.language = language
                }
                if(age) {
                    data.age = age
                }
                if(city) {
                    data.city = city
                }
                if(state) {
                    data.state = state
                }
                if(type) {
                    data.type = type
                }
                if(favorites) {
                    data.favorites = favorites
                }
            }
        }
        res.status(200).send(userData)
    },
    addUser : (req, res, next) => {
        let currentId = userData.length + 1;
        req.body.id = currentId;
        userData.push(req.body);
        res.status(200).send(userData);
    },

    deleteUser : (req, res, next) => {
        userData = userData.filter( (val) => {
            return val.id != req.params.userId 
        })
        res.status(200).send(userData);
    }
}