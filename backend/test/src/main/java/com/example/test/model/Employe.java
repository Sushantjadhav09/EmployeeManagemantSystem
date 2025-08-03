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
public class Employe {
	@Id
	private int empno;
	private String full_name;
	private String dob;
	private String gender;
	private int age;
	private String current_address;
	private String permanent_address;
	private String mob_no;
	private String personal_mail;
	private String emergency_contact_name;
	private String emergency_mobile_no;
	public Employe(int empno, String full_name, String dob, String gender, int age, String current_address,
			String permanent_address, String mob_no, String personal_mail, String emergency_contact_name,
			String emergency_mobile_no) {
		super();
		this.empno = empno;
		this.full_name = full_name;
		this.dob = dob;
		this.gender = gender;
		this.age = age;
		this.current_address = current_address;
		this.permanent_address = permanent_address;
		this.mob_no = mob_no;
		this.personal_mail = personal_mail;
		this.emergency_contact_name = emergency_contact_name;
		this.emergency_mobile_no = emergency_mobile_no;
	}
	public Employe() {
		super();
	}
	public int getEmpno() {
		return empno;
	}
	public void setEmpno(int empno) {
		this.empno = empno;
	}
	public String getFull_name() {
		return full_name;
	}
	public void setFull_name(String full_name) {
		this.full_name = full_name;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getCurrent_address() {
		return current_address;
	}
	public void setCurrent_address(String current_address) {
		this.current_address = current_address;
	}
	public String getPermanent_address() {
		return permanent_address;
	}
	public void setPermanent_address(String permanent_address) {
		this.permanent_address = permanent_address;
	}
	public String getMob_no() {
		return mob_no;
	}
	public void setMob_no(String mob_no) {
		this.mob_no = mob_no;
	}
	public String getPersonal_mail() {
		return personal_mail;
	}
	public void setPersonal_mail(String personal_mail) {
		this.personal_mail = personal_mail;
	}
	public String getEmergency_contact_name() {
		return emergency_contact_name;
	}
	public void setEmergency_contact_name(String emergency_contact_name) {
		this.emergency_contact_name = emergency_contact_name;
	}
	public String getEmergency_mobile_no() {
		return emergency_mobile_no;
	}
	public void setEmergency_mobile_no(String emergency_mobile_no) {
		this.emergency_mobile_no = emergency_mobile_no;
	}
	@Override
	public String toString() {
		return "Employe [empno=" + empno + ", full_name=" + full_name + ", dob=" + dob + ", gender=" + gender + ", age="
				+ age + ", current_address=" + current_address + ", permanent_address=" + permanent_address
				+ ", mob_no=" + mob_no + ", personal_mail=" + personal_mail + ", emergency_contact_name="
				+ emergency_contact_name + ", emergency_mobile_no=" + emergency_mobile_no + "]";
	}
	
	
}
