

<template markdown>
 <div>
    <button v-on:click="handleClick"> {{displayText}} </button> 
   <slot v-if="display"> This is a test </slot>

</div>

</template>

<script>

import ad from './data/assesmentDates';
import moment from 'moment';

export default {
  props: {
    displayText: {
      type: String,
      default: "Display Solution" 
    },
  },
  data() {
    return {
      display: false
    }
  },  methods: {
      handleClick: function() {
        this.display = !this.display;
      }
    }

  }
</script>
