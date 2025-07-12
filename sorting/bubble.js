// Bubble Sort

async function bubbleSort() {
   document.getElementById("sortingDesicription").innerHTML = `
    <div class="sortInfo">
    <article class="sortInfoArticle">
     <h2> Bubble Sort</h2>
     <p class="defcol">
     <a href="https://www.geeksforgeeks.org/bubble-sort/" target="_blank">Bubble Sort</a> is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems
     <p>
     </article>
     <aside class="sortInfoAside">
      <h3> Performance </h3>
      <table class="defcol">
       <tbody>
         <tr> 
         <td>Worst Case Time Complexity</td>
         <td class="mx-2"> O(n<sup>2</sup>)</td>
         </tr>
         <tr> 
         <td>Average Case Time Complexity </td>
         <td class="mx-2"> O(n<sup>2</sup>)</td>
         </tr>
         <tr> 
         <td>Best Case Time Complexity</td>
         <td class="mx-2"> O(n)</td>
         </tr>
         <tr> 
         <td>Worst Case Space Complexity</td>
         <td class="mx-2"> O(1)</td>
         </tr>
       <tbody>
      </table>
     <aside>
    </div>
    `;
    disableSortingButtons();
    let Bars = document.querySelectorAll(".bar");
 
    for (let i = 0; i < Bars.length - 1; i++) {
       for (let j = 0; j < Bars.length - i - 1; j++) {
 
          Bars[j].style.background = "yellow"; // active
          Bars[j + 1].style.background = "yellow"; // active
 
          await timePLs();
 
          const val1 = Number(Bars[j].style.height.slice(0, -2));
          const val2 = Number(Bars[j + 1].style.height.slice(0, -2));
 
          if (val1 > val2) {
             await swap(j, j + 1);
             Bars = document.querySelectorAll(".bar");
          }
 
          Bars[j].style.background = "linear-gradient(#ee0979, #ff6a00)"; // unsorted
          Bars[j + 1].style.background = "linear-gradient(#ee0979, #ff6a00)"; // unsorted
       }
 
       Bars[Bars.length - i - 1].style.background = "linear-gradient(#087ee1, #05e8ba)"; // sorted
    }
    Bars[0].style.background = "linear-gradient(#087ee1, #05e8ba)"; // sorted
    enableSortingButtons();
 }
 