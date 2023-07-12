const productModal = require("../models/product");

const getAllStaticProduct = async (req, res) => {
  // const products = await productModal.find({}).sort("name -price");

  //to apply numberqueryObject

  const products = await productModal
    .find({ price: { $gt: 30 }, rating: { $gte: 4.5 } })
    .sort("price");

  // const products = await productModal.find({});
  res.status(200).json({ products, count: products.length });
};

const getAllProducts = async (req, res) => {
  // const products = await productModal.find(req.query)
  let { name, fields, sort, company, featured, numericFilters } = req.query;
  let queryObject = {};
  if (name) queryObject.name = name;
  if (featured) queryObject.featured = featured;
  if (company) queryObject.company = company;
  //pagination relaed
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  //numeric filter

  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "<": "$lt",
      "=<": "$lte",
      "=": "eq",
    };

    const regEx = /\b(>|>=|<|<=|=)\b/g;
    let filter = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );

    const filterItem = ["price", "rating"];
    filter = filter.split(",").forEach((item) => {
      const [fields, operator, value] = item.split("-");
      if (filterItem.includes(fields)) {
        queryObject[fields] = { [operator]: Number(value) };
      }
    });
  }

  //fields are to get only desired key
  if (fields) {
    fields = fields.split(",").join(" ");
  }
  //select is used to get only specific key: value
  let products = productModal
    .find(queryObject)
    .select(fields)
    .limit(limit)
    .skip(skip);
  //sorting
  if (sort) {
    sort = sort.split(",").join(" ");

    products = products.sort(sort);
  }

  products = await products;

  res.status(200).json({ products, count: products.length });
};

module.exports = {
  getAllProducts,
  getAllStaticProduct,
};
