const Logiciel = require('../models/Logiciel');
const fs = require('fs');

exports.createLogiciel = (req, res, next) => {
   let logicielObject = req.body._id;
    delete logicielObject;
    const logiciel = new Logiciel({
        ...req.body
    });

    logiciel.save()
        .then(() => res.status(201).json({ message: 'Bien enregistré'}))
        .catch(err => res.status(400).json({err}));
};

exports.getAllLogiciels = (req, res, next) => {
    Logiciel.find()
        .then((logiciels) => res.status(200).json(logiciels))
        .catch(err => res.status(400).json({err}));
};
exports.modifyLogiciel = (req, res, next) => {
    Logiciel.updateOne({_id: req.params.id}, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({message: 'Modified!' }))
        .catch(error => res.status(400).json({ error }));

};
exports.getOneLogiciel = (req, res, next) => {
    Logiciel.findOne({ _id: req.params.id})
        .then(logiciel => res.status(200).json(logiciel))
        .catch(error => res.status(404).json({ error }));


};
exports.deleteLogiciel = (req, res, next) => {
    Logiciel.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json({message: 'Deleted!'}))
        .catch(error => res.status(400).json({ error }));

};
exports.deleteALL = (req, res, next) => {
    Logiciel.remove()
        .then(() => res.status(200).json({message: 'All Deleted!'}))
        .catch(error => res.status(400).json({ error }));
}

