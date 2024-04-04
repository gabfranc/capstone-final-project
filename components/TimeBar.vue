<script>
//DONE: import dayjs from dayjs
  import dayjs from 'dayjs';

  export default {
    data() {
      return {
        currentTime: '',
        newTime: ''
      };
    },
    mounted() {
      this.calculateTime();
    },
    methods: {
      calculateTime() {
        //DONE: get the current time
        let currentTime = dayjs();
       // TODO: adding 1 hour to the current time
       let newTime = currentTime.add(1, 'hour');

       //TODO: setting the data properties for the time
       this.currentTime = currentTime.format('YYYY-MM-DD HH:mm:ss');
       this.newTime = newTime.format('YYYY-MM-DD HH:mm:ss');
      }
    }
  };
</script>