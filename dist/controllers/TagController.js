"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const modelTag_1 = require("../models/modelTag");
const Tag = mongoose.model('Tag', modelTag_1.TagSchema);
class TagController {
    agregarTag(req, res) {
        let newTag = new Tag(req.body);
        newTag.save((err, tag) => {
            if (err) {
                res.send(err);
            }
            res.json(tag);
        });
    }
    mostrarTags(req, res) {
        Tag.find({}, (err, tag) => {
            if (err) {
                res.send(err);
            }
            res.json(tag);
        });
    }
    mostrarTagID(req, res) {
        Tag.findById(req.params.idTag, (err, tag) => {
            if (err) {
                res.send(err);
            }
            res.json(tag);
        });
    }
    actualizarTag(req, res) {
        Tag.findOneAndUpdate({ _id: req.params.idTag }, req.body, { new: true }, (err, tag) => {
            if (err) {
                res.send(err);
            }
            res.json(tag);
        });
    }
    eliminarTag(req, res) {
        Tag.remove({ _id: req.params.idTag }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json({
                message: 'Se elimino exitosamente el tag'
            });
        });
    }
}
exports.TagController = TagController;
//# sourceMappingURL=TagController.js.map