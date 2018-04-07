// cross browser toggle full screen controls
// TODO: add short circuit returns

export default element => {
  if ((element.RequestFullScreen || element.RequestFullscreen) && (document.ExitFullScreen || document.ExitFullscreen)) {
    if (!(document.FullScreenElement || document.FullscreenElement)) {
      (element.RequestFullScreen && element.RequestFullScreen());
      (element.RequestFullscreen && element.RequestFullscreen())
    } else {
      (document.ExitFullScreen && document.ExitFullScreen());
      (document.ExitFullscreen && document.ExitFullscreen())
    }
  } else {
    if (!(document.webkitFullScreenElement || document.webkitFullscreenElement)) {
      (element.webkitRequestFullScreen && element.webkitRequestFullScreen());
      (element.webkitRequestFullscreen && element.webkitRequestFullscreen())
    } else {
      (document.webkitExitFullScreen && document.webkitExitFullScreen());
      (document.webkitExitFullscreen && document.webkitExitFullscreen())
    }
    if (!(document.mozFullScreenElement || document.mozFullscreenElement)) {
      (element.mozRequestFullScreen && element.mozRequestFullScreen());
      (element.mozRequestFullscreen && element.mozRequestFullscreen())
    } else {
      (document.mozCancelFullScreen && document.mozCancelFullScreen());
      (document.mozCancelFullscreen && document.mozCancelFullscreen())
    }
    if (!(document.msFullScreenElement || document.msFullscreenElement)) {
      (element.msRequestFullScreen && element.msRequestFullScreen());
      (element.msRequestFullscreen && element.msRequestFullscreen())
    } else {
      (document.msExitFullScreen && document.msExitFullScreen());
      (document.msExitFullscreen && document.msExitFullscreen())
    }
  }
}
