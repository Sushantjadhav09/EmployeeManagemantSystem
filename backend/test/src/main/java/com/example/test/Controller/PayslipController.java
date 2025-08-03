package com.example.test.Controller;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.test.Service.PayslipService;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class PayslipController {

    @Autowired
    private PayslipService payslipService;

    @GetMapping("/download")
    public ResponseEntity<ByteArrayResource> downloadPayslipPdf() throws IOException {
        byte[] pdfData = payslipService.generatePayslipPdf();

        ByteArrayResource resource = new ByteArrayResource(pdfData);

        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=payslip.pdf")
            .contentType(MediaType.APPLICATION_PDF)
            .contentLength(pdfData.length)
            .body(resource);
    }
}
