
const update = document.querySelector('#Botao')

update.addEventListener('click', _ => {
    fetch('/projects', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({
      //   project_content: 'Darth Vadar',
      //   quote: 'I find your lack of faith disturbing.'
      // })
    })
  })