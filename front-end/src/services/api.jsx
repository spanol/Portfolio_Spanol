export default async function getFromApi(request, SetState) {
  const url = `http://localhost:3001/${request}`;
  const result = await fetch(url);
  const data = await result.json();
  SetState(data);
  console.log(data);
}
