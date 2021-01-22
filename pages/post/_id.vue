<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post-image">
          <img src="https://traveller-eu.ru/sites/default/files/styles/index/public/2017-08-29%2009.25.48%202-900x599.jpg" alt="">
        </div>
    </header>
    <main class="post-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eos deserunt commodi dolore molestiae, enim soluta fugit laudantium aut eius, incidunt beatae accusamus sequi quae reiciendis ex aspernatur delectus ipsa.</p>
      <p>Commodi reiciendis at aliquam quo aspernatur error, debitis numquam nemo corrupti magni voluptates sequi, laboriosam dignissimos ab possimus similique rem eveniet odio molestiae labore! Corporis omnis sapiente totam nobis accusamus.</p>
      <p>Esse enim ad molestiae aut atque vero nesciunt dolorum, aliquid repellat itaque nisi autem nemo. Tempora suscipit voluptas, atque qui doloremque aliquid harum explicabo ut magni nostrum excepturi, provident iure?</p>
      <p>Quibusdam eligendi atque suscipit molestias, hic nesciunt sequi sapiente. Neque, quas cumque assumenda, ex expedita, exercitationem repellat illo libero saepe minus quod? Nesciunt, eligendi minus ipsam dolores repellat corrupti ea!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, dignissimos doloremque culpa deleniti voluptate accusamus labore sint incidunt vero nam velit distinctio sit mollitia dolorem voluptatibus dolores nisi eos rerum.</p>
    </main>
    <footer>
      
      <app-comment-form
      v-if="canAddComment"
        @created="createCommentHandler"
      />
      
      <div class="comments" v-if="true">
        <app-comment
          v-for="comment in 4"
          :key="comment"
          :comment="comment"
        />
      </div>
      <div v-else>Комментариев нет</div>
    </footer>
  </article>
</template>


<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'
export default {
  validate({params}) {
    return Boolean(params.id)
  },
  data() {
    return {
      canAddComment: true
    }
  },
  methods: {
    createCommentHandler() {
      this.canAddComment = false
    }
  },
  components: {
    AppComment,
    AppCommentForm
  }
}
</script>

<style lang="scss" scoped> 
  .post{
    max-width: 600px;
    margin: 0 auto;
  }
  .post-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .post-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .post-image {
    img{
      width: 100%;
      height: auto;
    }
  }
  .post-content {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  
</style>