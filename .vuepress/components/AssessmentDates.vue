

<template markdown>
 <div>
     
     <table> 
           
            <tr><td>1 </td> <td> 40% </td> <td> Friday, before, {{moment(ad.ae1).format('h:mm') }} pm,  {{ moment(ad.ae1).format('DD MMMM YYYY')  }} </td><td> Due in {{moment(ad.ae1).fromNow()  }}   </td>  <td> <a href="./assessments/assessment_1.html" class="">Proposal and exploration -  2000 Word Formal Report</a> </td> </tr>
            <tr><td>2 </td> <td> 60% </td> <td> Friday, before, {{moment(ad.ae2).format('h:mm') }} pm,  {{ moment(ad.ae2).format('DD MMMM YYYY')  }} </td><td> Due in {{moment(ad.ae2).fromNow()  }}    </td> <td> <a href="" class="">Delivery of application  - 2000 Words of Documentation and a Functional Product</a> </td></tr>

     </table>

</div>

</template>

<script>

import ad from './data/assesmentDates';
import moment from 'moment';

export default {
  data() {
    return {
      dynamicComponent: null,
      ad: ad,
      moment: moment
    }
  } 
}
</script>