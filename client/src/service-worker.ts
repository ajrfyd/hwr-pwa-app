self.addEventListener('activate', () => {
  console.log('activated!!!!!!!!');
  setInterval(() => {
    console.log(window);
  }, 3000);
});
