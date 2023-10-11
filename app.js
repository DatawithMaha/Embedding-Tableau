console.log ("Hello World")

// var viz = new tableau.Viz(placeholderDiv, url, options)

let viz

// reference the placeholder VizContainer
const placeholderDiv = document.getElementById("VizContainer")

// get a URL - this is from the share link of tabelau public viz
const url = "https://public.tableau.com/views/TheIssueWithPlasticWaste-Final/THEISSUEWITHPLASTICWASTE3?:language=en-US&:display_count=n&:origin=viz_share_link"

// create options for Viz

const options = {
    device: "desktop",
    height: "800px",
    width: "1100px",
}

// made the function 'initiViz' - can name it anything
function initViz(){
    // now we have all the things to put it in no.3
    viz = new tableau.Viz(placeholderDiv, url, options)
}

// need to call the function for it to load on the webpage
// initViz()

// listen to the content to be called

document.addEventListener("DOMContentLoaded",initViz)

// Buttons - need to create it

const ExportPDFButton = document.getElementById ("exportPDF")
const FilterButton = document.getElementById ("FilterButton")

// create exportPDFfunction - function to export PDF
function exportPDFfunction() {
viz.showExportPDFDialog()
}

// add an event listener - wants to do something when that button gets clicked
ExportPDFButton.addEventListener("click",exportPDFfunction)
FilterButton.addEventListener("click",GetRangeValues)

// add new button - export to ppt
const ExportPPTButton = document.getElementById ("exportPPT")

function exportPPTfunction() {
    viz.showExportPowerPointDialog()
    }
    ExportPPTButton.addEventListener("click",exportPPTfunction)

    // Get range value

function GetRangeValues() {
    const minvalue = document.getElementById ("MinValue").value
    const maxvalue = document.getElementById ("MaxValue").value
    console.log(minvalue,maxvalue)
// Need to get the active sheet, bt this could be a dashboard or a sheet so need to diffrentiate it

const workbook = viz.getWorkbook() 
const activeSheet = workbook.getActiveSheet()
const sheets = activeSheet.getWorksheets()

// inspect the sheets to filter
console.log(sheets)

// bring back sheet to filter
const SheetToFilter = sheets[0]
console.log(SheetToFilter)

// do the filtering
SheetToFilter.applyRangeFilterAsync("SUM(Global plastics production (million tonnes)", 
{
min: minvalue,
max: maxvalue,
}).then(alert("Filtered!"))

}

