import mongoose from "mongoose";
const categoriesSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    parent : {
        type : mongoose.Types.ObjectId,
        required : false,
        ref : 'categories'
    },
    properties : {
        type : Object,
        required : false
    }
});

const categoriesModel = mongoose.models.categories || mongoose.model('categories',categoriesSchema);
export { categoriesModel };

