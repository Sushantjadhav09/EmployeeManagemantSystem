package com.example.test.model;

import java.util.Arrays;
import java.util.Date;

public class Payslip {
    private int id;
    private int employeeId;
    private Date month;
    private byte[] fileData;
    private String fileName;
	public Payslip(int id, int employeeId, Date month, byte[] fileData, String fileName) {
		super();
		this.id = id;
		this.employeeId = employeeId;
		this.month = month;
		this.fileData = fileData;
		this.fileName = fileName;
	}
	public Payslip() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public Date getMonth() {
		return month;
	}
	public void setMonth(Date month) {
		this.month = month;
	}
	public byte[] getFileData() {
		return fileData;
	}
	public void setFileData(byte[] fileData) {
		this.fileData = fileData;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	@Override
	public String toString() {
		return "Payslip [id=" + id + ", employeeId=" + employeeId + ", month=" + month + ", fileData="
				+ Arrays.toString(fileData) + ", fileName=" + fileName + "]";
	}
	public byte[] getData() {
		// TODO Auto-generated method stub
		return null;
	}

    
    
}
