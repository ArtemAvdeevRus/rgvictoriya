
  const video=document.getElementById('videoFon');
  video.addEventListener('play', () => {
  document.getElementById('content').className +='show'
  });
  const button_about=document.getElementById('about_btn')
  button_about.addEventListener('click', function close () {
    document.getElementById('abaut').style.display='flex';
    document.getElementById('branch').style.display='none';
    document.getElementById('coach').style.display='none';
    document.getElementById('news').style.display='none';
    document.getElementById('gallery').style.display='none';
  });
  const button_branch=document.getElementById('branch_btn')
  button_branch.addEventListener('click', function close () {
    document.getElementById('abaut').style.display='none';
    document.getElementById('branch').style.display='flex';
    document.getElementById('coach').style.display='none';
    document.getElementById('news').style.display='none';
    document.getElementById('gallery').style.display='none';
  });
   const button_coach=document.getElementById('coach_btn')
  button_coach.addEventListener('click', function close () {
    document.getElementById('abaut').style.display='none';
    document.getElementById('branch').style.display='none';
    document.getElementById('coach').style.display='flex';
    document.getElementById('news').style.display='none';
    document.getElementById('gallery').style.display='none';
  });
   const button_news=document.getElementById('news_btn')
  button_news.addEventListener('click', function close () {
    document.getElementById('abaut').style.display='none';
    document.getElementById('branch').style.display='none';
    document.getElementById('coach').style.display='none';
    document.getElementById('news').style.display='flex';
    document.getElementById('gallery').style.display='none';
  });
   const button_gallery=document.getElementById('gallery_btn')
  button_gallery.addEventListener('click', function close () {
    document.getElementById('abaut').style.display='none';
    document.getElementById('branch').style.display='none';
    document.getElementById('coach').style.display='none';
    document.getElementById('news').style.display='none';
    document.getElementById('gallery').style.display='flex';
  });