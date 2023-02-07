$(document).ready(async () => {
  async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
  }
  const clientId = 2;
  const url = `http://localhost:7081/auth/generarToken/?cliente=${clientId}`

  while(true){
    const response = await fetch(url);
    const {
      user: {
        token,
        remains
      } = {}
    } = await response.json();
    tiempo = remains;

    $("#token").text(token);
    $("#tiempo").text(tiempo);

    for(let i = tiempo; i >= 0; i--){
      $("#tiempo").text(i);
      await sleep(1000);
    }
  }
})