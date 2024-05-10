const {default: mongoose} = require("mongoose");

const RestrantSchema = mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: {
      type: String,
      default: "Point", // GeoJSON 타입은 기본적으로 'Point'로 설정
    },
    coordinates: {
      type: [Number], // 경도와 위도를 순서대로 배열로 저장 (GeoJSON 형식)
      index: "2dsphere", // GeoJSON 인덱스 생성 (지리적 위치 검색을 위해)
    },
  },
});

const Restrants = mongoose.model("restaurant", RestrantSchema);
module.exports = Restrants;
