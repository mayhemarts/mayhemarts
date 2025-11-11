export const downloadPdf = () => {
    const pdfPath = '/marco-fernandez-resume.pdf';

    // Create a hidden anchor element
    const a = document.createElement('a');
    a.href = pdfPath;
    a.download = 'marco-fernandez-resume.pdf';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}