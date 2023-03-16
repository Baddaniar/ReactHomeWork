const express = require("express");
const { ReactProductsModel } = require("../Models");
const router = express.Router();

router.get("/", (req,res) => {
    ReactProductsModel.find({}, (err, results) =>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(results)
        }
    })
})

router.post("/", async (req, res) => {
    const { product_name, sell_price, buy_price,product_amount } = req.body;

    const newPost = new ReactProductsModel({ product_name, sell_price, buy_price, product_amount});
    newPost.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send("product added");
        }
    });
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    ReactProductsModel.findByIdAndDelete(id, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("Product deleted");
        }
    });
})

module.exports = router;