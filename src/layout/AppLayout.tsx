import React from 'react'
import './layout.css'

interface LayoutProps {
	children: React.ReactNode
}

function AppLayout({ children }: LayoutProps) {
	return <main>{children}</main>
}

export default AppLayout
