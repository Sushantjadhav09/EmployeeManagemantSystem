package com.example.test.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.test.model.employee_projects;
@Repository
public interface ProjectRespository extends JpaRepository<employee_projects, Integer>{

	@Query(value = "select * from employee_projects where client_or_project_name like ?1",nativeQuery = true)
	List <employee_projects> findByProjectName( String client_or_project_name);
	
	@Transactional
	@Modifying
	@Query(value = "DELETE FROM employee_projects WHERE project_id = ?1", nativeQuery = true)
	void deleteByproject_code(int project_id);
	

	@Transactional
	@Modifying
	@Query(value = "UPDATE employee_projects SET project_id = ?1, project_code = ?2, start_date = ?3, end_date = ?4, project_id = ?5, reporting_manager_code = ?6 WHERE client_or_project_name = ?7", nativeQuery = true)
	void findByprojectnamee(int project_id, String project_code, String start_date, String end_date, String client_or_project_name, String reporting_manager_code);

	@Query("select p from employee_projects p where p.employee_id = :employee_id")
    List<employee_projects> findByEmployeeId(@Param("employee_id") int employee_id);
	
	@Transactional
	@Modifying
	@Query("delete from employee_projects p where p.employee_id = :employee_id")
	void deleteByEmployeeId(@Param("employee_id") int employee_id);
}
