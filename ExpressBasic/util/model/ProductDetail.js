export default class ProductDetail {
    _id = '';
    productName = '';
    price = 0;
    catId = '';
    constructor(obj) {
        if (!obj)
            return;
        this._id = obj._id || null;
        this.price = obj.price || 0;
        this.productName = obj.productName || null;
        this.catId = obj.catId || null;
    }
}
