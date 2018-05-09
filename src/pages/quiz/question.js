export default {
  props: ['value'],

  data () {
    return {
      val: this.value,
      isNumber: false,
      key: undefined
    }
  },

  methods: {
    answer (val, key) {
      this.$emit('answer', val, key || this.key)
    },
    isActive ({value}) {
      return this.val === value
    }
  },

  watch: {
    val (val) {
      this.answer(this.isNumber ? parseInt(val) : val, this.key)
    }
  }
}
