const express = require("express");
const { ReactProductsModel, ReactOperationModel } = require("../Models");
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


//Как вариант совместить продажу, покупку и добаление товара вместе как вариант. только наверное придется ифов много делать.
//Добавление нового поста
router.post("/", async (req, res) => {
    const { product_name, sell_price, buy_price,product_amount } = req.body;
    const newPost = new ReactProductsModel({ product_name, sell_price, buy_price, product_amount});
    const newOperation = new ReactOperationModel({type: "buy", name: product_name, product_amount: product_amount, product_summ: buy_price})
    newPost.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            newOperation.save((err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send("Product Added");
                }
            })
        }
    });
})




router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deletedItem = await ReactProductsModel.findById(id)
    const newOperation = new ReactOperationModel({type: "delete", name: deletedItem.product_name, product_amount: 0, product_summ: 0})
    newOperation.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            ReactProductsModel.findByIdAndDelete(id, (err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(deletedItem);
                }
            });
        }
    })
})

module.exports = router;