<template>
  <div>
    <NewPostMain></NewPostMain>
    <Back></Back>
  </div>
</template>

<script>
import NewPostMain from './NewpostMain'
import Back from './NewpostBack'

export default {
  name: 'NewPost',
  components: {
    NewPostMain,
    Back
  }
}
</script>

