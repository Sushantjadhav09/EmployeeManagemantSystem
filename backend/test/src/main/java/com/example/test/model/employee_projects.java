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
public class employee_projects {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int project_id;
	private String project_code;
	private String start_date;
	private String end_date;
	private String client_or_project_name;
	private String reporting_manager_code;
	private int employee_id;
	public employee_projects(int project_id, String project_code, String start_date, String end_date,
			String client_or_project_name, String reporting_manager_code, int employee_id) {
		super();
		this.project_id = project_id;
		this.project_code = project_code;
		this.start_date = start_date;
		this.end_date = end_date;
		this.client_or_project_name = client_or_project_name;
		this.reporting_manager_code = reporting_manager_code;
		this.employee_id = employee_id;
	}
	public employee_projects() {
		super();
	}
	public int getProject_id() {
		return project_id;
	}
	public void setProject_id(int project_id) {
		this.project_id = project_id;
	}
	public String getProject_code() {
		return project_code;
	}
	public void setProject_code(String project_code) {
		this.project_code = project_code;
	}
	public String getStart_date() {
		return start_date;
	}
	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}
	public String getEnd_date() {
		return end_date;
	}
	public void setEnd_date(String end_date) {
		this.end_date = end_date;
	}
	public String getClient_or_project_name() {
		return client_or_project_name;
	}
	public void setClient_or_project_name(String client_or_project_name) {
		this.client_or_project_name = client_or_project_name;
	}
	public String getReporting_manager_code() {
		return reporting_manager_code;
	}
	public void setReporting_manager_code(String reporting_manager_code) {
		this.reporting_manager_code = reporting_manager_code;
	}
	public int getEmployee_id() {
		return employee_id;
	}
	public void setEmployee_id(int employee_id) {
		this.employee_id = employee_id;
	}
	@Override
	public String toString() {
		return "employee_projects [project_id=" + project_id + ", project_code=" + project_code + ", start_date="
				+ start_date + ", end_date=" + end_date + ", client_or_project_name=" + client_or_project_name
				+ ", reporting_manager_code=" + reporting_manager_code + ", employee_id=" + employee_id + "]";
	}

	
}
