  console.log ('Скрипт работает');
  const video=document.getElementById('videoFon');
  console.log (video);
  video.addEventListener('play', () => {
    console.log (document.getElementById('content').className);
    document.getElementById('content').className +='show'
    console.log ('Стиль применился');
    console.log (document.getElementById('content').className);
  });