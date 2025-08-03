package com.example.test.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.test.Service.ProjectService;
import com.example.test.model.Employe;
import com.example.test.model.employee_projects;

@RestController
@CrossOrigin("*")
public class ProjectController {
	@Autowired
	ProjectService projectService;
	
	@GetMapping("/getProjectbyNames/{client_or_project_name}")
	public  List<employee_projects> getprojecttbyName(@PathVariable("client_or_project_name")String client_or_project_name) {
		
		return projectService.getProjectbyName(client_or_project_name);
	}
	
	@GetMapping("/getallaprojects")
	public List <employee_projects>getAllProjects() {
		
		return projectService.getaLLprojects();
	}
	
	@DeleteMapping("/DeleteProjectdetails/{project_id}")
	public String Deleteproject(@PathVariable("project_id") int project_id) {
		
		projectService.DeleteProject(project_id);
		return "record deleted";
	}
	
	
//	@PostMapping("/addprojectsdetails")
//	public String addEmloye(@RequestParam("a") int project_id,
//			@RequestParam("b") String project_code,
//			@RequestParam("c") String Start_date,
//			@RequestParam("d") String end_date,
//			@RequestParam("e") String client_or_project_name,
//			@RequestParam("f") String reporting_manager_code) {
//		employee_projects s1 = new employee_projects();
//		s1.setProject_id(project_id);
//		s1.setProject_code(project_code);
//		s1.setStart_date(Start_date);
//		s1.setEnd_date(end_date);
//		s1.setClient_or_project_name(client_or_project_name);
//		s1.setReporting_manager_code(reporting_manager_code);
//		projectService.addproject(s1);
//		
//		return "record inserted successfully";
//	}
	
	@PostMapping("/addprojectsdetails")
	public String addEmploye(@RequestBody employee_projects project) {
		projectService.addproject(project);
	    return "record inserted successfully";
	}
	
	@PutMapping("/updateproject/{project_id}")
	public String updateStudent(@RequestBody employee_projects newemployee_projects,@PathVariable("project_id") int project_id) {
		
		projectService.updateProject(project_id, newemployee_projects);
		
		return "record updated successfully";
	}
	
	@GetMapping("/getProjectsByEmployeeId/{employee_id}")
    public List<employee_projects> getProjectsByEmployeeId(@PathVariable("employee_id") int employee_id) {
        return projectService.getProjectsByEmployeeId(employee_id);
    }
    
    @DeleteMapping("/deleteProjectsByEmployeeId/{employee_id}")
    public String deleteProjectsByEmployeeId(@PathVariable("employee_id") int employee_id) {
        return projectService.deleteProjectsByemployeeId(employee_id);
    }

    @GetMapping("/getProject/{id}")
    public employee_projects getProjectById(@PathVariable("id") int id) {
        return projectService.getProjectById(id);
    }
}
