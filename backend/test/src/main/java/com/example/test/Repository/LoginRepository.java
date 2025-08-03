package com.example.test.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.example.test.model.Login;

public interface LoginRepository extends JpaRepository<Login, Integer> {

	@Transactional
	@Query("SELECT l FROM Login l WHERE l.username = :username")
	Login getLoginByUsername(@Param("username") String username);

}