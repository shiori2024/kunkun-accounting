<template>
    <img
      :src="imgUrl"
      alt="avator"
      :width="width + 'px'"
      :height="height + 'px'"
      :style="{ borderRadius: borderRadius + '%' }"
      :circle="circle"
      :square="square"
      @click="handlerClick"
    />
  </template>

<script>
export default {
  name: 'PictureBox',
  props: {
    imgUrl: {
      type: String,
      required: true,
      default: 'favicon.ico'
    },
    width: {
      type: Number,
      default: 50
    },
    height: {
      type: Number,
      default: 50
    },
    borderRadius: {
      type: Number,
      default: 50
    },
    circle: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    handlerClick: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      name: 'PictureBox'
      //   borderRadius: 50,
      //   width: 50,
      //   height: 50
    }
  }
  //   computed: {
  //     circle() {
  //       return this.borderRadius = 50;
  //     },
  //     square() {
  //       return this.width === this.height;
  //     },
  //   }
}
</script>

  <style scoped>
  /* .img {
    width: 50px;
    height: 50px;
  } */
  img {
    box-shadow : 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    padding: 2px;
  }
  </style>
