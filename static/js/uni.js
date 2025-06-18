const lang = document.documentElement.lang;

async function updateCounter() {
  displayElement = document.querySelector("#week-number");

  let currentWeek = await getCurrentWeek();
  console.log(currentWeek);
  if (lang == "hu") {
    currentWeek = await getCurrentWeek("hu");
  }

  displayElement.innerHTML = currentWeek;
}

async function getCurrentWeek(
  lang = "en",
  numberOnly = false,
  daysLeftBreak = true,
  daysLeftExams = true
) {
  const url = new URL("https://uwc.ymstnt.com/uniWeekCount");

  url.searchParams.append("lang", lang);
  url.searchParams.append("numberOnly", numberOnly);
  url.searchParams.append("daysLeftBreak", daysLeftBreak);
  url.searchParams.append("daysLeftExams", daysLeftExams);

  const response = await fetch(url, {
    method: "GET",
  });

  const result = await response.json();
  return result.message;
}

updateCounter();
