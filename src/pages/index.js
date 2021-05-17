import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/SEO"
import { Link } from "react-scroll"
import BannerModule from "../components/BannerModule/BannerModule"
import NavModule from "../components/NavModule/NavModule"
import MenuContext from "../components/MenuContext"
import { motion } from "framer-motion"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"

const Index = () => {
  const [isOpen, setNav] = useContext(MenuContext)

  const siteBody = {
    open: {
      x: "var(--menuWidth)",
    },
    closed: {
      x: 0,
    },
  }
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
      featuredProductsImg: file(relativePath: { eq: "bark.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <>
      <Seo title="Home" />
      <NavModule />
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={siteBody}
        transition={{ type: "ease", stiffness: 50, velocity: 50 }}
        style={{
          transition: "filter 0.3s ease",
          filter: isOpen ? "blur(25px)" : "none",
        }}
      >
        <BannerModule />
        <BasicTextModule />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features />
      </motion.div>
    </>
  )
}

export default Index
