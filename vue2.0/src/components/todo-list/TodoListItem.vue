<template>
  <div
    class="todo-list-item_container"
    @dblclick="onDblclick"
    @blur.capture.stop="onContainerBlur"
  >
    <input
      class="todo-list-item_checkbox"
      :checked="done"
      type="checkbox"
      ref="checkbox"
      @change="e => $emit('doneChange', e.target.checked)"
    />
    <span
      :class="{'todo-list-item_text--done': done}"
      class="todo-list-item_text"
      v-show="!isEditable"
    >{{ description }}</span>
    <input
      v-show="isEditable"
      class="todo-list-item_input"
      type="text"
      :value="description"
      ref="textInput"
      @blur="onDescriptionBlur"
    />
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    done: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isEditable: false
    }
  },
  methods: {
    // 编辑相关方法，同时供外部调用
    cancel () {
      this.$refs.textInput.value = this.description
      this.isEditable = false
    },
    save () {
      this.$refs.textInput.blur()
      this.onDescriptionBlur()
    },
    edit () {
      this.isEditable = true
      this.$refs.textInput.focus()
    },
    // 事件处理函数
    onDblclick (e) {
      // if (e.target === this.$refs.checkbox) {
      //   return false
      // }
      this.edit()
    },
    onDescriptionBlur (e) {
      if (e.target.value !== this.description) {
        this.$emit('descriptionChange', e.target.value)
      }
      this.$nextTick(() => {
        this.isEditable = false
      })
    },
    onContainerBlur (e) {
      this.save()
    }
  }
}
</script>
<style lang="scss" scoped>
.todo-list-item_text--done {
  text-decoration: line-through;
}
</style>
