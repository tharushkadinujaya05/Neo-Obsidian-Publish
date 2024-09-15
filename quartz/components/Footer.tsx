import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"
import { footer } from "mdast-util-to-hast/lib/footer"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer>
        <p>NeoSpace©2024 🐉</p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
