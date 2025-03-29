const formatTime = (time) => {
  const hour = time / 60;
  const minute = time % 60;
  return `${hour}h${minute}m`;
};

export default formatTime;
