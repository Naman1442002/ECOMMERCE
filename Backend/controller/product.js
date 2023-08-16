const { product } = require('../model/connector')
const { ObjectId } = require('mongoose').Types;


exports.createProduct =async(req, res) => {
  
  
  const Product = new product(req.body);
  
  Product.save();
 
  res.end("Product_Is_Created");
}

exports.getAllProducts = async (req, res) => {
  const data = await product.find();
  res.send(data);
  res.end();
}

exports.getProduct = async (req, res) => {
  const doc = await product.findById(new ObjectId(req.params.id))
  res.send(doc);
  res.end();
}


exports.replaceProduct = async (req, res) => {
  const documentId = new ObjectId(req.params.id);
  const replaceData = req.body;
  const result = await product.replaceOne({ _id: documentId }, replaceData);
  res.end("Product_Is_Replaced");
}

exports.updateProduct = async (req, res) => {
  const documentId = new ObjectId(req.params.id);
  const updateData = { $set: req.body };
  const result = await product.updateOne(documentId, updateData);
  res.send("Product_Is_Updated");
}

exports.deleteProduct = async (req, res) => {
  const deletedDocument = await product.deleteMany();
  if (deletedDocument) {
    console.log('Deleted Document Is:', deletedDocument);
  }
  else {
    console.log('Document not found');
  }
  res.send(deletedDocument);
}

exports.deleteManyProduct = async (req, res) => {
  const documentId = new ObjectId(req.params.id);

  const deletedDocument = await product.findByIdAndDelete(documentId);
  if (deletedDocument) {
    console.log('All_Document_Successfully_Deleted:', deletedDocument);

  } else {
    console.log('Document not found');
  }

  res.send(deletedDocument);
}