// https://randomuser.me/api/?results=24

let userData = [];

const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));
  console.log(userData);
};
// fonction pour traiter les date en ISO
const dateParser = (date) => {
  let newDate = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return newDate;
};
//------

const dayCalc = (date) => {
  let today = new Date();
  let todayTimestamp = Date.parse(today);
  let timestamp = Date.parse(date);

  // Date.parse convertir en timestamp

  return Math.ceil((todayTimestamp - timestamp) / (1000 * 60 * 60 * 24));
};

const userDispaly = async () => {
  await fetchUser();
  document.body.innerHTML = userData
    .map(
      (user) => `
      <div class="card">
        <img src=${user.picture.large} alt=${user.name.last}>
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
        <em>membre depuis : ${dayCalc(user.registered.date)} jours</em>
      </div>
  `
    )
    .join("");
};

userDispaly();
