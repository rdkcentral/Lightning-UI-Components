export default {
  global: {
    accessors: {},
    methods: {
      before__update() {
        this.patch({
          Message: {
            x: 400,
            text: {
              text: 'This is the base extension'
            }
          }
        });
      }
    },
    static: {},
    destroy() {
      this.patch({
        Message: undefined
      });
    }
  }
};
