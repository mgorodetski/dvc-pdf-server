const express = require('express');
// const cors = require('cors');
const path = require('path');
const puppeteer = require('puppeteer');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded());

app.use(bodyParser.urlencoded({
  extended: true
}));
// app.use(cors());

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
// });

// app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get('/*', (req, res) => {
  // res.sendFile(path.join(__dirname+'/client/build/index.html'));
  res.send('Server connection established');
});

app.post('/create-teacher-pdf', async (req, res, next) => {
  try {
    const pdf = await createTeacherPDF(req.body.name);
    res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
    res.send(pdf)
  } catch (err) {
    next(err);
  }
});

app.post('/create-klass-pdf', async (req, res, next) => {
  try {
    const pdf = await createKlassPdf(req.body.years, req.body.school, req.body.city, req.body.klass);
    res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
    res.send(pdf);
  }
  catch (err) {
    next (err);
  }
})

app.listen(port, () => {
  console.log(`server connected at ${port}`)
});

async function createTeacherPDF(name) {
  const queryParams = [];
  queryParams.push(encodeURIComponent('name') + '=' + encodeURIComponent(name));
  const queryString = queryParams.join('&');
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  console.log(queryString);
  await page.goto("https://dvc-2022.herokuapp.com/teacher-pdf?" + queryString, { waitUntil: 'networkidle2' });
  const pdf = await page.pdf({ printBackground: true, pageRanges: '1' });
  await browser.close();
  return pdf;
}

async function createKlassPdf(years, city, school, klass) {
  const queryParams = [];
  queryParams.push(encodeURIComponent('years') + '=' + encodeURIComponent(years));
  queryParams.push(encodeURIComponent('city') + '=' + encodeURIComponent(city));
  queryParams.push(encodeURIComponent('school') + '=' + encodeURIComponent(school));
  queryParams.push(encodeURIComponent('klass') + '=' + encodeURIComponent(klass));
  const queryString = queryParams.join('&');
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto("https://dvc-2022.herokuapp.com/klass-pdf?" + queryString, { waitUntil: 'networkidle2' });
  await page.addStyleTag({ path: './landscape.css' });
  const pdf = await page.pdf({ printBackground: true, pageRanges: '1' });
  await browser.close();
  return pdf;
}
