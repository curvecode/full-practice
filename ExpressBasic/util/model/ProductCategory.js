// const ProductCategory = {
//     _id = null,
//     categoryName = null,
//     init: (obj) => {
//         if (!obj)
//             return;
//         this._id = obj._id || null;
//         this.categoryName = obj.categoryName || null;
//     }

// }

class ProductCategory {
    _id = '';
    categoryName = '';

    constructor(obj) {
        if (!obj)
            return;
        this._id = obj._id || null;
        this.categoryName = obj.categoryName || null;
    }
}

export default ProductCategory;
