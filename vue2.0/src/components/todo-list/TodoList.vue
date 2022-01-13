<template>
  <div class="todo-list_container">
    <ul class="todo-list_ul--todo">
      2
      <li v-for="item of todoList" :key="item.id">
        <todo-list-item
          :description="item.description"
          :finished="false"
          @descriptionChange="v => descriptionChange(v, item.id)"
          @finishedChange="e => finishedChange(e, item.id)"
        />
      </li>
    </ul>
    <ul class="todo-list_ul--done">
      1
      <li v-for="item of doneList" :key="item.id">
        <todo-list-item
          :description="item.description"
          :finished="true"
          @descriptionChange="e => descriptionChange(e, item.id)"
          @finishedChange="e => finishedChange(e, item.id)"
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

  // watch: {
  //   list () {
  //     this.$forceUpdate()
  //   }
  // },

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
    descriptionChange (v, id) {
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
    finishedChange (v, id) {
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
</style>
