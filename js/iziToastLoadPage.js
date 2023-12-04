(
  function () {
    window.addEventListener("load", hello);
  }
)();

function hello() {
  iziToast.show({
    title: 'Hey',
    message: 'Have a good day!'
  });
}
