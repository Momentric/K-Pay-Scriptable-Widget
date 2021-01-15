//Find your api key at https://kiezelpay.com/account/api and add it here
const APIKEY = "Your API KEY"
//Then find your timezone offset at https://en.wikipedia.org/wiki/List_of_UTC_time_offsets
//Next take your offset ie: +2 and then multiply it buy 60, and then flip the symbol. (so -120)
//Add the offset to the url on line 20, same with platform (fitbit, garmin, pebble, all)
//Finally, Add a link to your png logo on line 96

//You can look through the code if you want, and customize things too.

async function loadData() {
let url = "https://api.kiezelpay.com/api/merchant/summary?key=" + APIKEY
let req = new Request(url)
let json = await req.loadJSON()
console.log(json)
return json.totalIncome
}

//Function to load today's total
async function loadToday() {
let newrl = "https://api.kiezelpay.com/api/merchant/today?offset=YOUR_OFFEST&platform=YOUR_PLATFORM&key="  + APIKEY
let newreq = new Request(newrl)
let dayson = await newreq.loadJSON()
console.log(dayson)
return dayson.amount
}

//Function to load next payout
async function loadPayout() {
let twourl = "https://api.kiezelpay.com/api/merchant/summary?key="  + APIKEY
let payreq = new Request(twourl)
let payjson = await payreq.loadJSON()
console.log(payjson)
return payjson.nextPayout.amount;
}

//creates a medium sized canvas
const drawContext = new DrawContext();

drawContext.size = new Size(665, 300);
drawContext.opaque = false; 
drawContext.respectScreenScale = true;

//Setup the actual widget
async function createWidget(data) {

let widget = new ListWidget()
widget.setPadding(0, 0, 0, 0);
widget.backgroundColor = new Color("#000")
//Change the colors on both line 40 & 46 to change the background color

const stack = widget.addStack()

stack.topAlignContent()
stack.backgroundColor = new Color("#000")

stack.addImage(await drawable());

async function drawable() { 

//Change the font to any valid system font, use iosfonts.com to find the name of one you like
drawContext.setFont(new Font("Futura", 45));
drawContext.setTextColor(new Color("#FFF"));
drawContext.drawText("$" + todaysales, new Point(30, 180))

//This text is left aligned and you may have to adjust the x, y values of these elements, if you know how to right align just these let me know
drawContext.drawText("$" + nextpayout, new Point(465, 180))

drawContext.setFont(new Font("Futura", 60));
drawContext.drawText("$" + data, new Point(380, 20))

drawContext.setFont(new Font("Helvetica-Light", 30));
drawContext.drawText("Total", new Point(560, 95))


//Set date format
let dF = new DateFormatter();
//You can change the date format if you want
dF.dateFormat = 'EEEE MMM d'; 
let theDate=new Date(); 
let fixdate = dF.string(theDate);
drawContext.drawText(fixdate, new Point(30, 240))

//This text also needs to be right aligned
drawContext.drawText("Next Payout", new Point(460, 240))

//Draws the image, you can adjust the x, y values
drawContext.drawImageAtPoint(img, new Point(35, 0))

return drawContext.getImage();
}


return widget
}
//Add the url to your logo here, make sure it's a png with dimensions of 252W 152H (px)
const i = await new Request("URL_TO_IMAGE");

//load data from the functions
const img = await i.loadImage();
let data = await loadData()
let nextpayout = await loadPayout()
let todaysales = await loadToday()
let widget = await createWidget(data)

if (config.runsInWidget) {
//setup right away
Script.setWidget(widget)
} else {
//preview first
widget.presentMedium()
}
Script.complete()
