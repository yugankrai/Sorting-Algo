// Quick Sort

async function quickSort(low, high) {
   document.getElementById("sortingDesicription").innerHTML = `
    <div class="sortInfo">
    <article class="sortInfoArticle">
     <h2> Quick Sort</h2>
     <p class="defcol">
     <a href="https://www.geeksforgeeks.org/quick-sort/" target="_blank">Quick Sort</a>  is an efficient, in-place sorting algorith that in practice is faster than MergeSort and HeapSort. However, it is not a stable sorting algorithm, meaning that the relative positioning of equal sort items is not preserved.Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays. The steps are:
     <ol>
     <li> Pick an element, called a pivot, from the array. This is usually done at random.</li>
     <li> Move pivot element to the end of the array.</li>
     <li> Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.</li>
     <li> Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.</li>
     </ol>
     The base case of the recursion is an array of size zero or one, which are sorted by definition.
     </p>
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
         <td> O(nlogn)</td>
         </tr>
         <tr> 
         <td>Best Case Time Complexity</td>
         <td> O(nlogn)</td>
         </tr>
         <tr> 
         <td>Worst Case Space Complexity</td>
         <td> O(logn)</td>
         </tr>
       <tbody>
      </table>
     <aside>
    </div>
    `;
    disableSortingButtons();
    if (low < high) {
       let pi = await partition(low, high);
       await quickSort(low, pi - 1); 
       await quickSort(pi + 1, high);
    }
    if (low == high){
       let Bars = document.querySelectorAll(".bar");
       Bars[low].style.background = "linear-gradient(#087ee1, #05e8ba)"; // sorted
    }
    enableSortingButtons();
 }
 
 
 async function partition(low, high) {
    let Bars = document.querySelectorAll(".bar");
    let pivot = Number(Bars[high].style.height.slice(0, -2));
 
    Bars[high].style.background = "linear-gradient(#6c33a3, #8241b8)"; //  pivot
 
    let i = low;
 
    for (let j = low; j < high; j++) {
 
       Bars[i].style.background = "yellow"; // active
       Bars[j].style.background = "yellow"; // active
       await timePLs();
 
       if (Number(Bars[j].style.height.slice(0, -2)) < pivot) {
          await swap(i, j);
          await timePLs();
          Bars[i].style.background = "linear-gradient(#ee0979, #ff6a00)"; // unsorted
          i++;
          Bars[i].style.background = "yellow"; // active
       }
 
       if (i != j)
          Bars[j].style.background = "linear-gradient(#ee0979, #ff6a00)"; // unsorted
    }
 
 
    await swap(i, high);
    Bars[i].style.background = "linear-gradient(#087ee1, #05e8ba)"; // sorted
    Bars[high].style.background = "linear-gradient(#ee0979, #ff6a00)"; // unsorted
 
    if (high == i)
       Bars[high].style.background = "linear-gradient(#087ee1, #05e8ba)"; // sorted
 
    await timePLs();
 
    return i;

 }
 