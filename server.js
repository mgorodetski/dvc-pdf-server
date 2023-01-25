const express = require('express');
const cors = require('cors');
const path = require('path');
const puppeteer = require('puppeteer');
const bodyParser = require('body-parser');

const publicPath = path.join(__dirname, './build');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

app.use(express.static(publicPath));

app.get('/*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
  // res.send(`server connected at ${port}`);
});

// app.use((req, res, next) => {
//   // res.setHeader('Access-Control-Allow-Origin', 'https://heroic-otter-9164ca.netlify.app'); 
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,application/xml');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

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
  const browser = await puppeteer.launch({args: ['--no-sandbox']});
  const page = await browser.newPage();
  console.log(queryString);

  // await page.goto("https://heroic-otter-9164ca.netlify.app/teacher-pdf?" + queryString, { waitUntil: 'networkidle2' });
  await page.goto("http://localhost:3000/teacher-pdf?" + queryString, { waitUntil: 'networkidle2' });

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
  const browser = await puppeteer.launch({args: ['--no-sandbox']});
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/klass-pdf?" + queryString, { waitUntil: 'networkidle2' });
  // await page.goto("https://heroic-otter-9164ca.netlify.app/klass-pdf?" + queryString, { waitUntil: 'networkidle2' });
  await page.addStyleTag({ path: './landscape.css' });
  const pdf = await page.pdf({ printBackground: true, pageRanges: '1' });
  await browser.close();
  return pdf;
}
