import jsonwebtoken from 'jsonwebtoken';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import bcrypt from 'bcrypt';
import token from '../token.js';
import moment from 'moment';
moment.locale('fr');


const hashCode = (s) => s.split("").reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    a & a;
}, 0);


const pubSchema = new mongoose.Schema({
    name: {
        type: String,
        default: '',
    },
    invitations: {
        type: Array,
    },
    participations: {
        type: Array,
    },
    categorie: {
        type: String,
    },
    startDate: {
        type: Date,
        default: ''
    },
    startTime: {
        type: String,
        default: ''
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    elements: {
        toBring: {
            type: Array
        },
        partBring: {
            type: Array
        }
    },
    adresse: {
        type: String
    },
    lieu: {
        type: String
    },
    description: {
        type: String
    },
    style: {
        type: String,
        default: ''
    },
    place_url:  {
        type: String
    },
    private:  {
        type: Boolean,
        default: false
    },
    budget: {
        type: Number,
        default: 0
    },
    tresorier: {
        name: {
            type: String,
            default: ""
        },
        email: {
            type: String,
            default: ""
        }
    }
});


pubSchema.methods.comparePassword = function(pwd, cb) {
    bcrypt.compare(pwd, this.password, function(err, isMatch) {
        if (err) cb(err);
        cb(null, isMatch);
    });
};

let model = mongoose.model('pub', pubSchema);

export default class pub {

    findAll(req, res) {
        model.find({
                startDate: {
                    $gte: today.toDate()
                }
            }, {
                password: 0
            }).populate('author', 'name groupe')
            .exec((err, pubs) => {
                if (err || !pubs) {
                    res.sendStatus(403);
                } else {
                    res.json(pubs);
                }
            });
    }


    findById(req, res) {
        model.findById(req.params.id, {
                password: 0
            })
            .populate('author', 'name')
            .exec((err, pub) => {
                if (err || !pub) {
                    res.sendStatus(403);
                } else {
                    res.json(pub);
                }
            });
    }

    create(req, res) {
        model.create(req.body,
            (err, pub) => {
                if (err || !pub) {
                    res.status(400).send(err.message);
                } else {
                    res.json({
                        success: true,
                        pub: pub,
                    });
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, pub) => {
            if (err || !pub) {
                res.status(500).send(err.message);
            } else {
                let tk = jsonwebtoken.sign(pub, token, {
                    expiresIn: "24h"
                });
                res.json({
                    success: true,
                    pub: pub,
                    token: tk
                });
            }
        });
    }

    
    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        });
    }
}
