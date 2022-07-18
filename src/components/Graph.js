import React from 'react'

function Graph() {
  return (
    <>

<div class="bg-white p-8 shadow-lg shadow-slate-200 rounded-lg w-auto">
  <table class="w-[340px] h-[280px] charts-css bar show-heading">
	<caption>Basic Bar Chart</caption>
	<tbody class="mt-[24px!important]">
	  <tr>
		<td style="--size: 0.2;"></td>
	  </tr>
	  <tr>
		<td style="--size: 0.4;"></td>
	  </tr>
	  <tr>
		<td style="--size: 0.6;"></td>
	  </tr>
	  <tr>
		<td style="--size: 0.8;"></td>
	  </tr>
	  <tr>
		<td style="--size: 1;"></td>
	  </tr>
	</tbody>
  </table>
</div>

    </>
  )
}

export default Graph