const express = require("express");
const Restrants = require("../models/Restrants");
const restRouter = express.Router();

restRouter.get("/", async (req, res) => {
  try {
    const rest = await Restrants.find();
    return res.status(200).send({rest});
  } catch (error) {
    console.log(error);
  }
});

restRouter.post("/location", async (req, res) => {
  try {
    const {lat, lon} = req.body;
    console.log(lat, lon);

    // 현재 위치에서 2km 이내의 레스토랑 데이터 조회
    const Restrants = await Restrants.find({
      location: {
        $nearSphere: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(lon), parseFloat(lat)], // 현재 위치의 경도, 위도
          },
          $maxDistance: 2000, // 최대 거리 (미터 단위, 여기서는 2km)
        },
      },
    });

    return res.status(200).send({Restrants});
  } catch (error) {
    console.error("데이터 조회 중 오류:", error);
    return res.status(500).json({error: "데이터 조회 중 오류 발생"});
  }
});

module.exports = restRouter;
