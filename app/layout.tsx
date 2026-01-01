import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Claude Code for Solopreneurs',
    template: '%s – Claude Code for Solopreneurs'
  },
  description: 'Learn to build your AI staff with Claude Code',
}

const navbar = (
  <Navbar
    logo={<span style={{ fontWeight: 700 }}>Claude Code for Solopreneurs</span>}
    projectLink="https://github.com/pollymallen/solopreneur-ai-staff"
  />
)

const footer = (
  <Footer>
    <p>Claude Code for Solopreneurs - Build Your AI Staff</p>
  </Footer>
)

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/pollymallen/solopreneur-ai-staff"
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{ backToTop: true }}
          editLink={null}
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
