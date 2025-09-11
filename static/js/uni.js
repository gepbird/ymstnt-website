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
  daysLeftExams = true,
  appendWeek = true
) {
  const url = new URL("https://uwc.ymstnt.com/uwc");

  url.searchParams.append("lang", lang);
  // Only append the parameters if they are true
  if (daysLeftBreak) {
    url.searchParams.append("days-left-break", "");
  }
  if (daysLeftExams) {
    url.searchParams.append("days-left-exam", "");
  }

  if (numberOnly) {
    url.searchParams.append("number-only", "");
  }

  if (appendWeek) {
    url.searchParams.append("append-week", "");
  }

  const response = await fetch(url, {
    method: "GET",
  });

  const result = await response.json();
  return result.message;
}

updateCounter();
