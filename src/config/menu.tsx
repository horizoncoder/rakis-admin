import React from 'react'
import { Menu, MenuItemLink } from '@devfamily/admiral'

const CustomMenu = () => {
    return (
        <Menu>
            <MenuItemLink name="Users" to="/users" icon="FiUser" />
            <MenuItemLink name="Offers" to="/offers" icon="FiPackage" />
        </Menu>
    )
}

export default CustomMenu
