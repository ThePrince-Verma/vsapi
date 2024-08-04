//controller status aur msgs show krega

const { query } = require("express");
const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { name, feature, sort, select } = req.query;
  const queryObject = {};

  if (feature) {
    queryObject.feature = feature;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  let apiData = Product.find(queryObject);

  if (sort) {
    // let sortFix = sort.replace(",", "");
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }
  //select = name price company;
  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  //pagination
  let page = Number(req.query.page)  || 1;
  let limit =Number(req.query.limit) || 10;

  //formula of pagination
  let skip = (page-1) * limit;

//   page=2
//   limit=3
//   skip= 1*3 =3

  apiData =apiData.skip(skip).limit(limit);

  console.log(queryObject);

  const myData = await apiData;
  res.status(200).json({ myData , nbHits:myData.length }); 
  //nbHIts =total no. of documents
};
const getAllProductsTesting = async (req, res) => {
    console.log(req,query);
  const myData = await Product.find(req.query);
  // (sort = name), price;

  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
