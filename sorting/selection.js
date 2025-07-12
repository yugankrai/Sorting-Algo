// Selection sort 

async function selectionSort() {
  
   document.getElementById("sortingDesicription").innerHTML = `
  <div class="sortInfo">
  <article class="sortInfoArticle">
   <h2 class="defhad"> Selection Sort</h2>
   <p class ="defcol">
   Selection Sort  is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.
   </p>
   </article>
   <aside class="sortInfoAside">
    <h3> Performance </h3>
    <table class="defcol">
     <tbody>
       <tr> 
       <td>Worst Case Time Complexity </td>
       <td> O(n<sup>2</sup>)</td>
       </tr>
       <tr> 
       <td>Average Case Time Complexity </td>
       <td> O(n<sup>2</sup>)</td>
       </tr>
       <tr> 
       <td>Best Case Time Complexity </td>
       <td> O(n<sup>2</sup>)</td>
       </tr>
       <tr> 
       <td>Worst Case Space Complexity </td>
       <td> O(1)</td>
       </tr>
     <tbody>
    </table>
   <aside>
  </div>
  `;
  
    Bars = document.querySelectorAll(".bar");
    let minimum;
    disableSortingButtons();
    for (let i = 0; i < Bars.length - 1; i++) {
       minimum = i;
       Bars[i].style.background = "yellow"; // active
 
       for (let j = i + 1; j < Bars.length; j++) {
 
          Bars[j].style.background = "yellow"; // active
 
          const minVal = Number(Bars[minimum].style.height.slice(0, -2));
          const val = Number(Bars[j].style.height.slice(0, -2));
 
          if (val < minVal) {
             Bars[minimum].style.background = "linear-gradient(#ee0979, #ff6a00)"; // unsorted
             minimum = j;
             Bars[minimum].style.background = "yellow"; // active
          }
 
          await timePLs();
 
          if (j != minimum)
             Bars[j].style.background = "linear-gradient(#ee0979, #ff6a00)"; // unsorted
       }
 
       await swap(i, minimum);
       Bars[minimum].style.background = "linear-gradient(#ee0979, #ff6a00)"; // unsorted
       Bars[i].style.background = "linear-gradient(#087ee1, #05e8ba)"; // sorted
    }
 
    Bars[Bars.length - 1].style.background = "linear-gradient(#087ee1, #05e8ba)"; // sorted
    enableSortingButtons();
 }
 