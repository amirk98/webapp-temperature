package com.example.demo.security.config;

import com.example.demo.appuser.AppUserService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@AllArgsConstructor
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final AppUserService appUserService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(bCryptPasswordEncoder);
        provider.setUserDetailsService(appUserService);
        return provider;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(daoAuthenticationProvider());
    }

    @Override
    protected void configure(final HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
//                .antMatchers("/api/v*/registration/**")
                .antMatchers("/h2-console/**","/api/v*/registration/**")
                .permitAll()
                .anyRequest()
                .authenticated()
//        http.headers().frameOptions().sameOrigin();
//                .fullyAuthenticated()
                .and()
//                .httpBasic();
                .formLogin()
                .defaultSuccessUrl("http://localhost:3000/dashboard")
////                .loginPage("/login")
//                .failureUrl("/login?error=true")
                .permitAll();
        http.headers().frameOptions().disable();
//                    .and()
//                .logout()
//                .logoutSuccessUrl("/login");
//                .invalidateHttpSession(true)
//                .clearAuthentication(true)
//                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
//                .logoutSuccessUrl("/login?logout")
//                .permitAll();;
//                .loginPage("/index.html")
//                .loginProcessingUrl("/perform_login")
//                .defaultSuccessUrl("/index.html",true)
//                .failureUrl("/index.html?error=true");
    }
//@Override
//protected void configure(final HttpSecurity http)
//        throws Exception {
//        http.csrf().disable().authorizeRequests()
//            .antMatchers(
//                    HttpMethod.GET,
//                    "/api/v*/registration/**", "/index*", "/static/**", "/*.js", "/*.json", "/*.ico")
//            .permitAll()
//            .anyRequest().authenticated()
//            .and()
//            .formLogin().loginPage("/index.html")
//            .loginProcessingUrl("/perform_login")
//            .defaultSuccessUrl("/homepage.html",true)
//            .failureUrl("/index.html?error=true");
//
//    }
}
