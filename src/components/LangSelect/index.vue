<template>
  <el-dropdown trigger="click" @command="handleSetLang">
    <div>
      <!-- <svg-icon class-name="size-icon" icon-class="size" /> -->
      <svg-icon icon-class="language" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="item of langOptions" :key="item.value" :disabled="lang===item.value" :command="item.value">
        {{
          item.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  data() {
    return {
      langOptions: [
        { label: '中文', value: 'zh' },
        { label: 'English', value: 'en' },
        { label: '한국어', value: 'ko' }
      ]
    }
  },
  computed: {
    lang() {
      return this.$store.getters.lang
    }
  },
  methods: {
    handleSetLang(lang) {
      this.$ELEMENT.lang = lang
      this.$store.dispatch('app/setLang', lang)
      this.refreshView()
      this.$message({
        message: 'Switch Language Success',
        type: 'success'
      })
    },
    refreshView() {
      // In order to make the cached page re-rendered
      this.$store.dispatch('tagsView/delAllCachedViews', this.$route)

      const { fullPath } = this.$route

      this.$nextTick(() => {
        this.$router.replace({
          path: '/redirect' + fullPath
        })
      })
    }
  }

}
</script>
