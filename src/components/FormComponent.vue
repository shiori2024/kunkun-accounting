<template>
  <div :style="formStyle" class="m0a">
    <div class="form" :style="{ 'justifyContent': horizontal, 'flexDirection': vertical }">
      <label :for="idName">{{ label }}</label>
      <input :id="idName" :value="localValue" @input="updateValue" type="text" :placeholder="strTip">
      <slot name="input"></slot>
      <button @click="btnChange">{{ btnText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormComponent',
  props: {
    value: {
      type: String,
      default: ''
    },
    // 水平排列方式
    horizontal: {
      type: String,
      default: 'space-evenly'
    },
    // 列布局，或行布局
    vertical: {
      type: String,
      default: 'row' // row or column
    },
    // input标签
    label: {
      type: String,
      default: ''
    },
    // 用于绑定label聚焦
    idName: {
      type: String,
      default: ''
    },
    // 输入框内容
    str: {
      type: String,
      default: ''
    },
    // 输入框内提示
    strTip: {
      type: String,
      default: '请输入用户名'
    },
    // 按钮文字
    btnText: {
      type: String,
      default: ''
    },
    // 按钮点击事件
    btnChange: {
      type: Function,
      default: () => { }
    }
  },
  computed: {
    formStyle () {
      return {
        width: this.vertical === 'column' ? '320px' : 'auto'
      }
    }
  },
  data () {
    return {
      localValue: this.value // 初始化本地值与props中的value一致
    }
  },
  watch: {
    // 监听props中的value变化，更新本地值
    value (newValue) {
      this.localValue = newValue
    },
    // 监听本地值变化，触发input事件更新父组件的数据
    localValue (newValue) {
      this.$emit('input', newValue)
    }
  },
  methods: {
    updateValue (event) {
      // 处理input事件，更新本地值
      this.localValue = event.target.value
    }
  }
}
</script>

<style scoped lang="scss">
.m0a {
  margin: 0 auto;
}

.form {
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;

  label {
    margin-right: auto;
    flex: 0.3;
  }

  button {
    height: 35px;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    background: #4b83d6;
    color: white;
    border-radius: 2px;
    margin-left: 15px;

    &:hover {
      box-shadow: 1px 1px 1px rgba(89, 149, 240, 0.6);
    }
  }

  input {
    flex-grow: 1;
    outline: none;
    border: none;
    padding-left: 5px;
    width: 300px;
    height: 35px;
    border: 1px solid #ccc;
    margin: 10px;

    &:focus {
      border: 1px solid #6d9ee7;
    }
  }
}
</style>
