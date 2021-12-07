const data = [
  { rating: 3 },
  { rating: 5 },
  { rating: 3 },
  { rating: 5 },
  { rating: 5 },
  { rating: 3 },
  { rating: 3 },
  { rating: 4 },
  { rating: 4 },
  { rating: 4 },
  { rating: 4 },
  { rating: 3 },
  { rating: 3 },
  { rating: 5 },
  { rating: 2 },
  { rating: 1 },
];

function getAvgReviews(users, totalNumReviews) {
  let total = 0;

  users.forEach(function (el) {
    total += el.rating;
  });

  let avgTotal = Math.ceil((total / totalNumReviews) * 10) / 10;

  return avgTotal;
}

function getPercentage(avgReviews, numStars) {
  const realPercentage = (avgReviews / numStars) * 100;

  // returns rounded percentage
  return Math.round(realPercentage / 10) * 10;
}

function getNumOfReviews(users, userRating) {
  const ratingsArr = users.filter((user) => user.rating === userRating);

  return ratingsArr.length;
}

// DOM elements
const starRating = document.querySelector(".star-rating-in");
const totalStarRating = document.querySelector(".total-star-rating");
const totalReviewNum = document.querySelector(".total-reviews-num");

const ratingBar5 = document.querySelector(".bar-rating-5");
const ratingNums5 = document.querySelector(".nums-rating-5");

const ratingBar4 = document.querySelector(".bar-rating-4");
const ratingNums4 = document.querySelector(".nums-rating-4");

const ratingBar3 = document.querySelector(".bar-rating-3");
const ratingNums3 = document.querySelector(".nums-rating-3");

const ratingBar2 = document.querySelector(".bar-rating-2");
const ratingNums2 = document.querySelector(".nums-rating-2");

const ratingBar1 = document.querySelector(".bar-rating-1");
const ratingNums1 = document.querySelector(".nums-rating-1");

const avgReview = getAvgReviews(data, data.length);
const reviewPercentage = getPercentage(avgReview, 5);

totalStarRating.textContent = avgReview;
starRating.style.width = `${reviewPercentage}%`;
totalReviewNum.textContent = `${data.length}`;

// set num and percentage of 5 star reviews
let reviewNum = getNumOfReviews(data, 5);
let reviewPercent = getPercentage(reviewNum, data.length);

ratingBar5.style.width = `${reviewPercent}%`;
ratingNums5.textContent = `${reviewNum}`;

reviewNum = getNumOfReviews(data, 4);
reviewPercent = getPercentage(reviewNum, data.length);

ratingBar4.style.width = `${reviewPercent}%`;
ratingNums4.textContent = `${reviewNum}`;

reviewNum = getNumOfReviews(data, 3);
reviewPercent = getPercentage(reviewNum, data.length);

ratingBar3.style.width = `${reviewPercent}%`;
ratingNums3.textContent = `${reviewNum}`;

reviewNum = getNumOfReviews(data, 2);
reviewPercent = getPercentage(reviewNum, data.length);

ratingBar2.style.width = `${reviewPercent}%`;
ratingNums2.textContent = `${reviewNum}`;

reviewNum = getNumOfReviews(data, 1);
reviewPercent = getPercentage(reviewNum, data.length);

ratingBar1.style.width = `${reviewPercent}%`;
ratingNums1.textContent = `${reviewNum}`;
