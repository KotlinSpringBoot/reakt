package com.reaktboot.reakt.dao

import com.reaktboot.reakt.entity.Role
import org.springframework.data.jpa.repository.JpaRepository

interface RoleDao : JpaRepository<Role, Long> {
}
