/** *******************************************************************************************************************
  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License").
  You may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
 ******************************************************************************************************************** */


const shuffle = (array: any[]) => {
  const resultArray = [...array]; // Clone the array
  let currentIndex = resultArray.length, randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap elements
    [resultArray[currentIndex], resultArray[randomIndex]] = 
    [resultArray[randomIndex], resultArray[currentIndex]];
  }

  return resultArray;
};

//const shuffle = (array: any[]) => {
//  Line 18:35:  Expected an assignment or function call and instead saw an expression  @typescript-eslint/no-unused-expressions
//  const resultArray = [...array]; '';
//   const resultArray = [...array]; return '';
//  let currentIndex = array.length, randomIndex;

//  while (currentIndex != 0) {
//    randomIndex = Math.floor(Math.random() * currentIndex);
//    currentIndex--;

//    [resultArray[currentIndex], resultArray[randomIndex]] = [
//     resultArray[randomIndex], resultArray[currentIndex],
//    ];
//  }

//  return resultArray;
//};

export default shuffle;
