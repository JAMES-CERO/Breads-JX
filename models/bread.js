// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose


// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: "https://i.pinimg.com/originals/0b/8d/eb/0b8debd232d2e454e7ad458da8ec3a1f.jpg" },
    baker: {
        type: Schema.Types.ObjectID,
        ref: "Baker"
    }
})
breadSchema.virtual("bakers",{
    ref: "Baker",
    localField:  "id"  ,
    foreignField: "breads"
})


// helper methods 
// helper methods 
breadSchema.methods.getBakedBy = function(){
    return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
  }
  

// model and export 
const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread
