// Insertion sort

async function insertionSort() {
   document.getElementById("sortingDesicription").innerHTML = `
  <div class="sortInfo">
  <article class="sortInfoArticle">
   <h2> Insertion Sort</h2>
   <p class="defcol">
   <a href="https://www.geeksforgeeks.org/insertion-sort/" target="_blank">Insertion Sort</a> is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort.
   <p>
   </article>
   <aside class="sortInfoAside">
    <h3> Performance </h3>
    <table class="defcol">
     <tbody>
       <tr> 
       <td>Worst Case Time Complexity</td>
       <td> O(n<sup>2</sup>)</td>
       </tr>
       <tr> 
       <td>Average Case Time Complexity </td>
       <td> O(n<sup>2</sup>)</td>
       </tr>
       <tr> 
       <td>Best Case Time Complexity</td>
       <td> O(n)</td>
       </tr>
       <tr> 
       <td>Worst Case Space Complexity</td>
       <td> O(1)</td>
       </tr>
     <tbody>
    </table>
   <aside>
  </div>
  `;
  disableSortingButtons();
    let Bars = document.querySelectorAll(".bar");
 
    Bars[0].style.background = "linear-gradient(#087ee1, #05e8ba)"; // sorted
 
    for (let i = 1; i < Bars.length; i++) {
       let j = i;
 
       await timePLs();
 
       while (j > 0 && Number(Bars[j].style.height.slice(0, -2)) < Number(Bars[j - 1].style.height.slice(0, -2))) {
          Bars[j].style.background = "yellow"; // active
          Bars[j-1].style.background = "yellow"; // active
          await swap(j, j - 1);
 
          await timePLs();
          
          Bars[j-1].style.background = "linear-gradient(#087ee1, #05e8ba)"; // sorted
          Bars[j].style.background = "linear-gradient(#087ee1, #05e8ba)"; // sorted
          j--;
       }
 
       Bars[i].style.background = "linear-gradient(#087ee1, #05e8ba)"; // sorted
    }
    enableSortingButtons();
 
 
 }
 