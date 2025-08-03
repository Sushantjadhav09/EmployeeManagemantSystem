package com.example.test.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@Data
@NoArgsConstructor
@ToString
public class Finance_details {

	@Id
	private int id;
	private String pan_card;
	private String aadhar_card;
	private String bank_name;
	private String branch_name;
	private String ifsc_code;
	private double ctc_breakup;
	public Finance_details(int id, String pan_card, String aadhar_card, String bank_name, String branch_name,
			String ifsc_code, double ctc_breakup) {
		super();
		this.id = id;
		this.pan_card = pan_card;
		this.aadhar_card = aadhar_card;
		this.bank_name = bank_name;
		this.branch_name = branch_name;
		this.ifsc_code = ifsc_code;
		this.ctc_breakup = ctc_breakup;
	}
	public Finance_details() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPan_card() {
		return pan_card;
	}
	public void setPan_card(String pan_card) {
		this.pan_card = pan_card;
	}
	public String getAadhar_card() {
		return aadhar_card;
	}
	public void setAadhar_card(String aadhar_card) {
		this.aadhar_card = aadhar_card;
	}
	public String getBank_name() {
		return bank_name;
	}
	public void setBank_name(String bank_name) {
		this.bank_name = bank_name;
	}
	public String getBranch_name() {
		return branch_name;
	}
	public void setBranch_name(String branch_name) {
		this.branch_name = branch_name;
	}
	public String getIfsc_code() {
		return ifsc_code;
	}
	public void setIfsc_code(String ifsc_code) {
		this.ifsc_code = ifsc_code;
	}
	public double getCtc_breakup() {
		return ctc_breakup;
	}
	public void setCtc_breakup(double ctc_breakup) {
		this.ctc_breakup = ctc_breakup;
	}
	@Override
	public String toString() {
		return "Finance_details [id=" + id + ", pan_card=" + pan_card + ", aadhar_card=" + aadhar_card + ", bank_name="
				+ bank_name + ", branch_name=" + branch_name + ", ifsc_code=" + ifsc_code + ", ctc_breakup="
				+ ctc_breakup + "]";
	}
	
	
}
