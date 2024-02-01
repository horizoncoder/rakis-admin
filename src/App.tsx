import React from 'react'
import { Admin, createRoutesFrom, OAuthProvidersEnum } from '@devfamily/admiral'
import menu from './config/menu'
import dataProvider from './config/dataProvider'
// import authProvider from './config/authProvider'
import '@devfamily/admiral/style.css'
import themeLight from './config/theme/themeLight'
import themeDark from './config/theme/themeDark'

// TODO: Change logo
import Logo from '../assets/pictures/nike-4-logo-svg-vector.svg'

const apiUrl = import.meta.env.VITE_API_URL || '/api'
const Routes = createRoutesFrom(import.meta.globEager('../pages/**/*'))

function App() {
    return (
        <Admin
            logo={Logo}
            dataProvider={dataProvider(apiUrl)}
            // authProvider={authProvider(apiUrl)}
            menu={menu}
            themePresets={{ light: themeLight, dark: themeDark }}
            oauthProviders={[
                OAuthProvidersEnum.Google,
            ]}
        >
            <Routes />
        </Admin>
    )
}

export default App
