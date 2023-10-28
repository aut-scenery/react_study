var bus = {
  list: [],
  // 订阅
  subscribe(callback) {
    this.list.push(callback);
  },

  // 发布
  publist(text) {
    this.list.forEach(callback => {
      callback && callback(text);
    })
  }
}

export default bus