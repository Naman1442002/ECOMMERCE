const mongoose = require('mongoose');
 require('dotenv').config();
const {userDataSchema,productSchema}=require('./schema')

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.DB_CONNECTION_STRING);
  console.log('database connection successful');
}

exports.userData = mongoose.model('userData', userDataSchema);
exports.product = mongoose.model('product', productSchema);

