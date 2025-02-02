import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react"
import NextLink, { LinkProps as NextLinkProps } from "next/link"
import { ExternalLinkIcon } from "src/components"

interface LinkProps extends NextLinkProps, Omit<ChakraLinkProps, keyof NextLinkProps> {}

interface CustomLinkProps extends LinkProps {
  withExternalIcon?: boolean
}

export const Link: React.FC<CustomLinkProps> = ({
  children,
  href,
  as,
  locale,
  passHref,
  legacyBehavior = true,
  prefetch,
  replace,
  scroll,
  shallow,
  withExternalIcon,
  ...props
}) => (
  <NextLink {...{ href, as, locale, legacyBehavior, passHref, prefetch, replace, scroll, shallow }}>
    <ChakraLink {...props}>
      {children}
      {withExternalIcon && <ExternalLinkIcon marginLeft="0.25rem" />}
    </ChakraLink>
  </NextLink>
)
