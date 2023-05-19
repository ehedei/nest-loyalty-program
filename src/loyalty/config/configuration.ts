export default () => ({
  amountPerPoint: process.env.AMOUNT_PER_POINT
    ? +process.env.AMOUNT_PER_POINT
    : 10,
  pointsNeededForDiscount: process.env.POINTS_NEEDED_FOR_DISCOUNT
    ? process.env.POINTS_NEEDED_FOR_DISCOUNT
    : 10,
  baseDiscount: process.env.BASE_DISCOUNT ? +process.env.BASE_DISCOUNT : 3,
});
