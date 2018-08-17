<template lang="html">
  <div class="IconList">
      <ul>
        <li v-for="list in listItems">
          <a :href="list.to"><img :src="list.src" :key="list.id"></a>
          <span>{{list.name}}</span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'IconList',
  props: {
    listItems:{
      type: Array,
      default: [],
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
.IconList {
  position: relative;
  background: #fff;
}
.IconList::before {
  width: 110%;
  height: .40rem;
  position: absolute;
  left: -5%;
  top: -.40rem;
  z-index: 5;
  content: '';
  border-radius: 50% 50% 0 0;
  background: #fff;
}
.IconList ul {
  padding-left: 0;
  margin: 0 auto;
  display: -webkit-flex; /* Safari*/
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.IconList li {
  display: inline-block;
  margin-bottom: .1rem;
  width: 17%;
  text-align: center;
  list-style: none;
}
.IconList li img {
  width:100%;
  outline: none;
}
</style>
