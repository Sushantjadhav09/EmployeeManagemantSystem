package com.example.test.Service;

import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.stereotype.Service;

@Service
public class PayslipService {

    public byte[] generatePayslipPdf() throws IOException {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        PdfWriter writer = null;
        PdfDocument pdfDoc = null;
        Document document = null;

        try {
            // Initialize PDF writer with the output stream
            writer = new PdfWriter(out);
            pdfDoc = new PdfDocument(writer);
            document = new Document(pdfDoc);

            // Add content to the PDF and ensure a page is added
            pdfDoc.addNewPage();  // Explicitly add a new page to avoid "no pages" error

            document.add(new Paragraph("Payslip for the Last 6 Months"));
            document.add(new Paragraph("Employee Name: John Doe"));
            document.add(new Paragraph("Employee ID: 12345"));
            document.add(new Paragraph("Month: September"));
            document.add(new Paragraph("Total Earnings: $5000"));
            document.add(new Paragraph("Total Deductions: $500"));
            document.add(new Paragraph("Net Pay: $4500"));

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error generating PDF", e);
        } finally {
            if (document != null) document.close();
            if (pdfDoc != null) pdfDoc.close();
            if (writer != null) writer.close();
        }

        return out.toByteArray();
    }

    public static void main(String[] args) throws IOException {
        PayslipService service = new PayslipService();
        byte[] pdfData = service.generatePayslipPdf();

        // Save the PDF to a file for testing purposes
        try (FileOutputStream fos = new FileOutputStream("generated_payslip_test.pdf")) {
            fos.write(pdfData);
            System.out.println("PDF generated successfully.");
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("Error writing PDF to file.");
        }
    }
}
