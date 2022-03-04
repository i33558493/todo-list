<template>
  <div id="app">
    <todo-list
      :list="list"
      v-model="doneList"
    />
  </div>
</template>

<script>
import TodoList from './components/todo-list'

export default {
  name: 'App',
  components: {
    TodoList
  },
  data () {
    return {
      doneList: [],
      list: [
        {
          description: '1',
          id: 1
        },
        {
          description: '2',
          id: 2
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
