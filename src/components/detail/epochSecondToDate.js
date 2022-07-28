const epochSecondToDate = (e) => {
  let date = new Date(e * 1000);

  return (date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate());
}

export default epochSecondToDate;
