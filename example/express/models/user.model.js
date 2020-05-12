const setSchema = new mongoose.Schema({
      name: {
         type: String,
         unique: true,
         trim: true,
         required: true
      },
      age: {
        type: Number,
        trim: true,
        required: true
      },
      hobby: {
        type: String,
        trim: true,
        required: true
      },
      country: {
        type: String,
        trim: true,
        required: true
      },
      state: {
        type: String,
        trim: true,
        required: true
      }
});

const userSchema = mongoose.model("crud", setSchema);
module.exports = userSchema;