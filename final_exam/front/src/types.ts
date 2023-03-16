export interface IProducts{
    _id: String,
    product_name: String,
    sell_price: Number,
    buy_price: Number,
    product_amount: Number,
    __v: Number
}

export interface IOperatiom{
    _id: String,
    type: String,
    name: String,
    date: Date,
    product_amount: number,
    product_summ: number
}

