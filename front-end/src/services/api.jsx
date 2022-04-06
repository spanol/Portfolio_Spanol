export default async function getFromApi(request, SetState) {
  const url = "https://spanol-portfolio-backend.herokuapp.com/" + request;
  const result = await fetch(url);
  const data = await result.json();
  SetState(data);
}
