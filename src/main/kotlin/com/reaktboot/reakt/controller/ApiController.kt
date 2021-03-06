package com.reaktboot.reakt.controller

import com.reaktboot.reakt.dao.UserDao
import com.reaktboot.reakt.entity.User
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import javax.servlet.http.HttpServletRequest

@RestController
@RequestMapping("/api")
class ApiController {

    @GetMapping(value = ["/session"])
    @PreAuthorize("hasRole('ADMIN')")
    fun hello(request: HttpServletRequest): Map<String, Any> {
        val session = request.session
        val attributes = mutableMapOf<String, Any>()
        session.attributeNames.iterator().forEach {
            attributes[it] = session.getAttribute(it)
        }
        return attributes
    }

    @Autowired lateinit var userDao: UserDao
    @GetMapping(value = ["/users"])
    fun users(): List<User> {
        return userDao.findAll()
    }
}








