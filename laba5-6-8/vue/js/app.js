const App = {
  data() {
    return {
      val: "",
      charCount: 0,
      notes: [],
      time: new Date(),
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault()
    },
    charLimit() {
      this.charCount = this.val.length
    },
    addNote() {
      if (this.val) {
        const formattedTime = new Intl.DateTimeFormat("ru", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }).format(Date.now())

        const note = {
          text: this.val,
          timestamp: formattedTime,
        }

        this.notes.push(note)
        this.val = ""
        this.charCount = 0
      }
    },
  },
  computed: {},
  watch: {},
}

Vue.createApp(App).mount("#app")
