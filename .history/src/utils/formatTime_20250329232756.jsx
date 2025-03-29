const formatTime = (time) => {
  const hour = Math.floor(time / 60);
  const minute = time % 60;
  return `${hour}h${minute}m`;
};

export default formatTime;
