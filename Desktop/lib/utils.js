function dateToString(dateInISO) {
  var date = new Date(dateInISO);
  var time = "";
  var currentdate = new Date();
  var Difference_In_Time = currentdate.getTime() - date.getTime();
  var Difference_In_Minutes = Math.floor(Difference_In_Time / (1000 * 60));
  var Difference_In_Hours = Math.floor(Difference_In_Time / (1000 * 3600));
  var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
  var Difference_In_Month = Math.floor(Difference_In_Time / (1000 * 3600 * 24 * 31));
  var Difference_In_years = Math.floor(Difference_In_Time / (1000 * 3600 * 24 * 365));

  if (Difference_In_years > 0 && time === "") {
    time = `${Difference_In_years} ${Difference_In_years == 1 ? "year" : "years"
      } ago`;
  }
  if (Difference_In_Month > 0 && time === "") {
    time = `${Difference_In_Month} ${Difference_In_Month == 1 ? "month" : "months"
      } ago`;
  }
  if (Difference_In_Days > 0 && time === "") {
    time = `${Difference_In_Days} ${Difference_In_Days == 1 ? "day" : "days"
      } ago`;
  }
  if (Difference_In_Hours > 0 && time === "") {
    time = `${Difference_In_Hours} ${Difference_In_Hours == 1 ? "hour" : "hours"
      } ago`;
  }
  if (Difference_In_Minutes > 0 && time === "") {
    time = `${Difference_In_Minutes} ${Difference_In_Minutes == 1 ? "min" : "mins"
      } ago`;
  }

  return time;
}

export { dateToString };