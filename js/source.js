window.jsPDF = window.jspdf.jsPDF;

function savePDF() {
  //  document.getElementById('download-pdf').addEventListener('click', function() {
        /*let images = document.getElementsByTagName("img");
        for (let i = 0; i < images.length; i ++)
        {
            images[i].crossOrigin = "anonymous";
        }*/

        const element = document.getElementById('mainbody'); // Get the HTML element to be converted to PDF
        html2canvas(element).then(canvas => {

            const imgData = canvas.toDataURL('image/png'); // Convert canvas to image data
            const pdf = new jsPDF(); // Initialize jsPDF
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight); // Add image to PDF
            pdf.save('converted-document.pdf'); // Save PDF
        });
    //    });
}


function getEditableText() {
    getExperienceTimeline("timelinerecent", "<p> jun 2023 - Present</p>");
    getExperienceTimeline("languageNamesList", "<p>English</p><p>Malayalam</p><p>Hindi</p>");
    getExperienceTimeline("feauturedPoints"," <p><ul><li>Strategy development and planning of campaigns that promote the business and generate genuine traffic</li>" + 
    "<li>SEO Content Creation for Blogs, Website, Social media</li></ul></p>");
    getExperienceTimeline("timeline2","<p> 2017 - Present</p>");
    getExperienceTimeline("rolephrase", "<p>UX/UI Designer</p>");
    getExperienceTimeline("job1","<div><p>Marketing Manager</p></div><div><p>Pankayam|full-time</p></div>");
    getExperienceTimeline("job2","<div><p>Marketing Manager</p></div><div><p>Pankayam|full-time</p></div>");
    getExperienceTimeline("feauturedPoints2"," <p><ul><li>Strategy development and planning of campaigns that promote the business and generate genuine traffic</li>" + 
    "<li>SEO Content Creation for Blogs, Website, Social media</li></ul></p>");
    getExperienceTimeline("timeline3","<p> sep 2021 - Jun 2023</p>");
}

function getExperienceTimeline(id, defaultText ) {
    let sometxt = defaultText;
    if (sessionStorage) {
        sometxt = sessionStorage.getItem("ss_" + id);
        sometxt = !sometxt ? defaultText : sometxt;
    }
    document.getElementById(id).innerHTML = sometxt;
}

function setEditableText(id) {
    if (sessionStorage)
    {
        console.log(id);
        sessionStorage.setItem("ss_" + id, document.getElementById(id).innerHTML );
    }
    console.log(document.getElementById(id).innerText);
}