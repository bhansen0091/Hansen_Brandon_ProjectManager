const Product = require("../models/product.model");


module.exports = {
    index : (req,res) => {
        Product.find()
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    create : (req,res) => {
        Product.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    // random : (req,res) => {
    //     Product.find()
    //         .then(products => {
    //             let random = Math.floor(Math.random() * products.length);
    //             res.json({results: products[random]})
    //         })
    //         .catch(err => res.status(404).json({errors: err.errors}))
    // },
    show : (req,res) => {
        Product.find({_id: req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    update : (req,res) => {
        Product.updateOne({_id:req.params.id}, req.body, {runValidators:true, new:true})
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    destroy: (req,res) => {
        Product.deleteOne({_id:req.params.id})
            .then(data => res.redirect(303, '/api/products'))
            .catch(err => res.status(404).json({errors: err.errors}))
    }
}