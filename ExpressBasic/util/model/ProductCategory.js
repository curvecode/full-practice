/*jshint esversion: 6 */
class ProductCategory {
    constructor(obj) {
        if (!obj)
            return;
        this._id = obj._id || null;
        this.categoryName = obj.categoryName || null;
    }
}

module.exports = ProductCategory;
