package com.medicare;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable()
		.authorizeHttpRequests((requests) -> requests
				.requestMatchers("/signup", "/home","/signupUser","/","logoutSuccessful").permitAll()
				.anyRequest().permitAll()
				)
		.formLogin((form) -> form
				.loginPage("/login")
				.permitAll()
				)
		.logout().logoutSuccessUrl("/logoutSuccessful")
		.logoutRequestMatcher(new AntPathRequestMatcher("/logout", "GET"));

		return http.build();
	}

	
}