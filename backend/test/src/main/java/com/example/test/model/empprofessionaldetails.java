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
public class empprofessionaldetails {
		@Id
	    private int employment_code;
	    private String company_mail;
	    private String office_phone;
	    private String city;
	    private String office_address;
	    private String reporting_manager_mail;
	    private String hr_name;
	    private String employment_history;
	    private String date_of_joining;
		public empprofessionaldetails(int employment_code, String company_mail, String office_phone, String city,
				String office_address, String reporting_manager_mail, String hr_name, String employment_history,
				String date_of_joining) {
			super();
			this.employment_code = employment_code;
			this.company_mail = company_mail;
			this.office_phone = office_phone;
			this.city = city;
			this.office_address = office_address;
			this.reporting_manager_mail = reporting_manager_mail;
			this.hr_name = hr_name;
			this.employment_history = employment_history;
			this.date_of_joining = date_of_joining;
		}
		public empprofessionaldetails() {
			super();
		}
		public int getEmployment_code() {
			return employment_code;
		}
		public void setEmployment_code(int employment_code) {
			this.employment_code = employment_code;
		}
		public String getCompany_mail() {
			return company_mail;
		}
		public void setCompany_mail(String company_mail) {
			this.company_mail = company_mail;
		}
		public String getOffice_phone() {
			return office_phone;
		}
		public void setOffice_phone(String office_phone) {
			this.office_phone = office_phone;
		}
		public String getCity() {
			return city;
		}
		public void setCity(String city) {
			this.city = city;
		}
		public String getOffice_address() {
			return office_address;
		}
		public void setOffice_address(String office_address) {
			this.office_address = office_address;
		}
		public String getReporting_manager_mail() {
			return reporting_manager_mail;
		}
		public void setReporting_manager_mail(String reporting_manager_mail) {
			this.reporting_manager_mail = reporting_manager_mail;
		}
		public String getHr_name() {
			return hr_name;
		}
		public void setHr_name(String hr_name) {
			this.hr_name = hr_name;
		}
		public String getEmployment_history() {
			return employment_history;
		}
		public void setEmployment_history(String employment_history) {
			this.employment_history = employment_history;
		}
		public String getDate_of_joining() {
			return date_of_joining;
		}
		public void setDate_of_joining(String date_of_joining) {
			this.date_of_joining = date_of_joining;
		}
		@Override
		public String toString() {
			return "empprofessionaldetails [employment_code=" + employment_code + ", company_mail=" + company_mail
					+ ", office_phone=" + office_phone + ", city=" + city + ", office_address=" + office_address
					+ ", reporting_manager_mail=" + reporting_manager_mail + ", hr_name=" + hr_name
					+ ", employment_history=" + employment_history + ", date_of_joining=" + date_of_joining + "]";
		}
	    
	    

}
