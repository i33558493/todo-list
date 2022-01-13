<template functional>
  <div class="todo-list-item_container">
    <input
      class="todo-list-item_checkbox"
      :checked="data.attrs.finished"
      type="checkbox"
      @change="e => (typeof listeners.finishedChange === 'function') && listeners.finishedChange(e.target.checked) " />
    <input
      class="todo-list-item_text"
      :value="data.attrs.description"
      type="text"
      @change="e => (typeof listeners.descriptionChange === 'function') && listeners.descriptionChange(e.target.value)" />
  </div>
</template>
