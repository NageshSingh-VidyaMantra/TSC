(() => {
  console.log("Type Casting");
  const btn = document.getElementById('btn')! as HTMLInputElement;
  // '!' LHS expression will never return null
  btn.value = 'Click Me :)';
})();