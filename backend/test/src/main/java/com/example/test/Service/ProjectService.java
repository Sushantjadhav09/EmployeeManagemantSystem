package com.example.test.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.test.Repository.ProjectRespository;

import com.example.test.model.employee_projects;

@Service
public class ProjectService {
	@Autowired
	ProjectRespository projectRespository;

	public List<employee_projects> getProjectbyName(String client_or_project_name) {
		
		return projectRespository.findByProjectName(client_or_project_name) ;
	}

	public List<employee_projects> getaLLprojects() {
		return projectRespository.findAll();
	}

	public employee_projects addproject(employee_projects s1) {
		
		return projectRespository.save(s1);
	}

	public employee_projects updateProject(int project_id, employee_projects newEmployeeProjects) {
	    
	    Optional<employee_projects> optionalProject = projectRespository.findById(project_id);
	    
	    
	    if (optionalProject.isPresent()) {
	        employee_projects currDBvalues = optionalProject.get();
	        
	        currDBvalues.setProject_code(newEmployeeProjects.getProject_code());
	        currDBvalues.setStart_date(newEmployeeProjects.getStart_date());
	        currDBvalues.setEnd_date(newEmployeeProjects.getEnd_date());
	        currDBvalues.setClient_or_project_name(newEmployeeProjects.getClient_or_project_name());
	        currDBvalues.setReporting_manager_code(newEmployeeProjects.getReporting_manager_code());
	        
	        return projectRespository.save(currDBvalues);
	    }
		return newEmployeeProjects;
	}

	
	public void DeleteProject(int project_id) {
		
		 projectRespository.deleteByproject_code(project_id);
		
	}

	public List<employee_projects> getProjectsByEmployeeId(int employee_id) {
		return projectRespository.findByEmployeeId(employee_id);
	}

	public String deleteProjectsByemployeeId(int employee_id) {
		if (!projectRespository.findByEmployeeId(employee_id).isEmpty()) {
			projectRespository.deleteByEmployeeId(employee_id);
		    return "All project details for employee deleted successfully";
		}
		return "No projects found for this employee";
	}
	
	public employee_projects getProjectById(int projectId) {
        Optional<employee_projects> project = projectRespository.findById(projectId);
        return project.orElse(null);
    }
}
