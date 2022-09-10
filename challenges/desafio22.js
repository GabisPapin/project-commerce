db.produtos.updateMany({}, { $push: { vendasPorDia: { $each: [0, 0, 0, 0, 0, 0, 0] } } });
db.produtos.updateOne({ nome: "Big Mac" }, { $push: { vendasPorDia: { $each: [60], $position: 3, $slice: 7 }  } });
db.produtos.updateMany({ tags: "bovino" }, { $push: { vendasPorDia: { $each: [120], $position: 6, $slice: 7 } } });
db.produtos.find({}, { nome: true, vendasPorDia: true, _id: false });