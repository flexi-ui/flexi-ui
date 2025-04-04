import { forwardRef } from '@flexi-ui/system'
import { LinkIcon } from '@flexi-ui/shared-icons'
import { linkAnchorClasses } from '@flexi-ui/theme'

import { UseLinkProps, useLink } from './use-link'

export interface LinkProps extends UseLinkProps {}

const Link = forwardRef<'a', LinkProps>((props, ref) => {
  const {
    Component,
    children,
    showAnchorIcon,
    anchorIcon = <LinkIcon className={linkAnchorClasses} />,
    getLinkProps,
  } = useLink({
    ref,
    ...props,
  })

  return (
    <Component {...getLinkProps()}>
      <>
        {children}
        {showAnchorIcon && anchorIcon}
      </>
    </Component>
  )
})

Link.displayName = 'FlexiUI.Link'

export default Link
