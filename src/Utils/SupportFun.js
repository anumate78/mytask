export const shuffle = (array) => {
  console.log("array",array)
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  

  return array;
};

export const createArrayOfNumbers = () => {
  let numbersArray = [];

  while (numbersArray.length < 6) {
    let randomNum = getRandomNumber();
    //check whether number already exist
    let isFound = false;
    numbersArray.map((value) => {
      if (value === randomNum) {
        isFound = true;
      }
    });
    if (isFound === false) {
      numbersArray.push(randomNum);
    }
  }

  return numbersArray;
};

const getRandomNumber = () => {
  
  let ab=[{number:"B"},{number:"C"},{number:"A"},{number:"D"},{number:"E"},{number:"F"},{number:"G"},{number:"H"},{number:"A"},{number:"B"},{number:"C"},{number:"E"},{number:"F"},{number:"G"},{number:"H"},{number:"D"},]
  return ab
  // return Math.floor(Math.random() * 100 + 1);
};

export const mergeTwoArrays = (arrayOne, ArrayTwo) => {
  let mergedArray = arrayOne.concat(ArrayTwo);
  return mergedArray;
};

export const checkWhetherAllCardsMatched = (cardNumbers) => {
  let isAllMatched = true;
  cardNumbers.map((cardItem) => {
    if (cardItem.flipped === false) {
      isAllMatched = false;
    }
  });

  return isAllMatched;
};

export const arrayToDataArray = (shuffledArray) => {
  shuffledArray =[{number:"B"},{number:"C"},{number:"A"},{number:"D"},{number:"E"},{number:"F"},{number:"G"},{number:"H"},{number:"A"},{number:"B"},{number:"C"},{number:"E"},{number:"F"},{number:"G"},{number:"H"},{number:"D"},]
  let dataArray = [];
  shuffledArray.map((number, index) => {
    console.log("numbernumber",number.number)
    let data = {
      value: number,
      id: index,
      flipped: false,
    };
    dataArray.push(data);
  });

  return dataArray;
};
