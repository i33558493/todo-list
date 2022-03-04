<template>
  <div class="todo-list_container">
    <slot name="groupTitleTodo"></slot>
    <ul class="todo-list_ul todo-list_ul--todo">
      <li v-for="item of todoList" :key="item.id">
        <todo-list-item
          :description="item.description"
          :done="false"
          @descriptionChange="v => onDescriptionChange(v, item.id)"
          @doneChange="e => onDoneChange(e, item.id)"
        />
      </li>
    </ul>
    <slot name="groupTitleDone"></slot>
    <ul class="todo-list_ul todo-list_ul--done">
      <li v-for="item of doneList" :key="item.id">
        <todo-list-item
          :description="item.description"
          :done="true"
          @descriptionChange="e => onDescriptionChange(e, item.id)"
          @doneChange="e => onDoneChange(e, item.id)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'

export default {
  name: 'TodoList',

  components: { TodoListItem },

  props: {
    list: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },

  model: {
    'prop': 'value',
    'event': 'change'
  },

  data () {
    return {}
  },

  computed: {
    todoList () {
      return this.list.filter(e => this.value.indexOf(e.id) === -1)
    },
    doneList () { // 按 value 顺序返回数组
      return this.value.map(e => this.list.find(item => item.id === e))
    }
  },

  mounted () {},

  methods: {
    onDescriptionChange (v, id) {
      const newList = this.list.map(i => {
        if (i.id === id) {
          return {
            ...i,
            description: v
          }
        }
        return i
      })
      this.$emit('listChange', newList)
    },
    onDoneChange (v, id) {
      let newValue = null
      if (v) {
        newValue = [...this.value]
        newValue.push(id)
      } else {
        newValue = this.value.filter(i => i !== id)
      }
      this.$emit('change', newValue)
    }
  }
}
</script>
<style lang='scss' scoped>
.todo-list_ul {
  margin-top: 0;
  margin-bottom: 0
}
</style>
